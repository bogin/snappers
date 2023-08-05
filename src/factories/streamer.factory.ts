import { StreamType } from "../models/enums/streamer.enum";
import { FFmpegStreamer } from "../services/ffmpeg/ffmpeg.service";

export class StreamerFactory {
    create = (type: StreamType) => {
        switch (type) {
            case StreamType.FacebookLive: {
                return new FFmpegStreamer();
            }
            default: {
                return new Error('Streamer type not supported');
            }
        }
    }
}