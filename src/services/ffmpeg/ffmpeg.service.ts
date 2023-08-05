import { StreamData } from "../../models/interfaces/stream-data.model";
import { FaceBookLiveDefualtArgs } from "./configurations/default-command-args.configurations";
import { cloneDeep } from 'lodash';

export class FFmpegStreamer {
    // private command: FFmpegCommand;
    constructor() {
        const defaultCommandArgs = cloneDeep(FaceBookLiveDefualtArgs);

    }

    stream = (data: StreamData) => {
        const ffmpegCommand: any = {};
        //spawn
    }
} 

