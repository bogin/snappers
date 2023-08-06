import { CMDHelper } from "../../helpers/cmd.helper";
import { StreamData } from "../../models/interfaces/stream-data.model";
import { FaceBookLiveDefualtArgs } from "./configurations/default-command-args.configurations";
import { cloneDeep } from 'lodash';
import { FFmpegConfigurations } from "./configurations/ffmpeg.configurations";
import { CommandArg } from "../../models/interfaces/command-args.model";
import { Command } from "../../models/interfaces/command.model";
import { Streamer } from "../../classes/streamer.class";

export class FFmpegStreamer extends Streamer {
    private cmdHelper: CMDHelper = new CMDHelper();
    constructor() {
        super();
    }

    stream = (data: StreamData) => {
        const command = this.createStreamCommand(data);
        this.cmdHelper.executeCommand(command);
    }

    private createStreamCommand = (data: StreamData): Command => {
        return this.cmdHelper.createCommand({
            commandName: FFmpegConfigurations.command_key,
            commandArgs: this.fillArgsFromData(cloneDeep(FaceBookLiveDefualtArgs), data, ['video_src', 'outFileFormant']),
            eventHandlers: [{ name: 'exit', handler: FFmpegConfigurations.exitHandler }],
            length_in_seconds: data.length_in_seconds,  
        });
    }

    private fillArgsFromData = (args: CommandArg[], data: StreamData, modelKeys: string[]): CommandArg[] => {
        modelKeys.forEach((modelKey: string) => {
            const argument = args.find((arg: CommandArg) => arg.model_key === modelKey);
            if (!!argument) {
                argument.value = data[modelKey];
            } else {
                throw new Error(`FFmpeg service: could not set arg value for: ${modelKey}`);
            }
        });

        return args;
    }
}

