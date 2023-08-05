import { StreamType } from "../models/enums/streamer.enum";
import { StreamData } from "../models/interfaces/stream-data.model";
import { Stream } from "../models/interfaces/stream.model";
import { FFmpegStreamer } from "../services/ffmpeg/ffmpeg.service";

export class StreamerFactory {
    create = (stream: Stream) => {
        switch (stream.type) {
            case StreamType.FacebookLive: {
                return new FFmpegStreamer(stream.data);
            }
            default: {
                return new Error('Streamer type not supported');
            }
        }
    }
}