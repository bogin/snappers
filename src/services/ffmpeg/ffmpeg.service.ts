import { CMDHelper } from "../../helpers/cmd.helper";
import { StreamData } from "../../models/interfaces/stream-data.model";
import { FaceBookLiveDefualtArgs } from "./configurations/facebook-live-default-command-args.configurations";
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
        const streamToFaceBookCommand = this.createStreamCommand(data);
        this.cmdHelper.executeCommand(streamToFaceBookCommand);
    }

    private createStreamCommand = (data: StreamData): Command => {
        return this.cmdHelper.createCommand({
            commandName: FFmpegConfigurations.command_key,
            commandArgs: cloneDeep(FaceBookLiveDefualtArgs),
            data,
            eventHandlers: FFmpegConfigurations.handlers,
            length_in_seconds: data.length_in_seconds,  
        });
    }
}

