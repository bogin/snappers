import { SpawnHelper } from "../../helpers/spawn.helper";
import { StreamData } from "../../models/interfaces/stream-data.model";
import { FaceBookLiveDefualtArgs } from "./configurations/default-command-args.configurations";
import { cloneDeep } from 'lodash';
import { FFmpegConfigurations } from "./configurations/ffmpeg.configurations";
import { CommandArg } from "../../models/interfaces/command-args.model";
import { AppConfigurations } from "../../configurations/app.configurations";
import { EventHandler } from "../../models/interfaces/event-handler.model";
import { Streamer } from "../../factories/streamer.factory";

export class FFmpegStreamer extends Streamer {
    private spawnHelper: SpawnHelper;
    constructor(data: StreamData) {
        super();
        const defaultCommandArgs = cloneDeep(FaceBookLiveDefualtArgs);
        const args = cloneDeep(defaultCommandArgs);
        const videoArg = args.find((arg: CommandArg) => arg.model_key === 'video_src');
        if (!!videoArg) {
            videoArg.value = data.video_src;
            // TODO replace if with error
        }

        const outputUrlArg = args.find((arg: CommandArg) => arg.model_key === 'outFileFormant');
        if (!!outputUrlArg) {
            outputUrlArg.value = `${AppConfigurations.facebookRTMPUrl}${AppConfigurations.streamKey}`;

            // TODO replace if with error
        }

        this.spawnHelper = new SpawnHelper(
            FFmpegConfigurations.command_key,
            args,
            data.length_in_seconds,
        )
    }

    stream = () => {
        const eventHandler: EventHandler = { name: 'exit', handler: this.exitHandler };
        this.spawnHelper.spawn([eventHandler]);
    }

    private exitHandler = (code, signal) => {
        if (code === 0) {
            // video ended.
        }
        if (code) { // no video found ?
            if (code === 1) {
                // noVideo
            }
            console.error('Child exited with code', code)
        } else if (signal) {
            console.error('Child was killed with signal', signal);
        } else {
            console.log('Child exited okay');
        }
    }
}

