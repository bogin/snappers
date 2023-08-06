import { StreamType } from "../models/enums/streamer.enum";
import { FFmpegStreamer } from "../services/ffmpeg/ffmpeg.service";

export class StreamerFactory {
    
    create = (type: StreamType) => {
        switch (type) {
            case StreamType.FacebookLive: {
                return new FFmpegStreamer();
            }
            default: {
                throw new Error(`Streamer type: ${type} not supported`);
            }
        }
    }
}