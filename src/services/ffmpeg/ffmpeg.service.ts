import { SpawnHelper } from "../../helpers/spawn.helper";
import { StreamData } from "../../models/interfaces/stream-data.model";
import { FaceBookLiveDefualtArgs } from "./configurations/default-command-args.configurations";
import { cloneDeep } from 'lodash';
import { FFmpegConfigurations } from "./configurations/ffmpeg.configurations";
import { CommandArg } from "../../models/interfaces/command-args.model";
import { AppConfigurations } from "../../configurations/app.configurations";

export class FFmpegStreamer {
    private spawnHelper: SpawnHelper;
    constructor(data: StreamData) {
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
        this.spawnHelper.spawn();
    }
}

