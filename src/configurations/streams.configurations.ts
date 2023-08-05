import { StreamType } from "../models/enums/streamer.enum";
import { Stream } from "../models/interfaces/stream.model";

export const Streams: Stream[] = [
    {
        type: StreamType.FacebookLive,
        data: {
            video_src: '../public/assets/vidoes/snappers_channel_14.mp4',
            length_in_seconds: 60, // TODO - VALIDATE AGAINST VIDEO LENGTH      
        }
    },
    {
        type: StreamType.FacebookLive,
        data: {
            video_src: '../public/assets/vidoes/snappers_nba.mp4',
            length_in_seconds: 60, // TODO - VALIDATE AGAINST VIDEO LENGTH      
        }
    }
];