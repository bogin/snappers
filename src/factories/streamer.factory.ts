import { StreamType } from "../models/enums/streamer.enum";
import { Stream } from "../models/interfaces/stream.model";
import { FFmpegStreamer } from "../services/ffmpeg/ffmpeg.service";

export abstract class Streamer {
    public abstract stream(): void;
}

export class StreamerFactory {
    
    create = (stream: Stream) => {
        switch (stream.type) {
            case StreamType.FacebookLive: {
                return new FFmpegStreamer(stream.data);
            }
            default: {
                throw new Error(`Streamer type: ${stream.type} not supported`);
            }
        }
    }
}