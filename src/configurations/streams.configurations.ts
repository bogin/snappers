import { StreamType } from "../models/enums/streamer.enum";

export const Streams = [
    {
        type: StreamType.FacebookLive,
        data: {
            video_src: './src/public/assets/vidoes/snappers_channel_14.mp4',
            length_in_seconds: 60, // TODO - VALIDATE AGAINST VIDEO LENGTH      
        }
    },
    {
        type: StreamType.FacebookLive,
        data: {
            video_src: './src/public/assets/vidoes/snappers_nba.mp4',
            length_in_seconds: 60, // TODO - VALIDATE AGAINST VIDEO LENGTH      
        }
    }
];