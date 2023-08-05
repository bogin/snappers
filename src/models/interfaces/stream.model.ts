import { StreamType } from "../enums/streamer.enum";
import { StreamData } from "./stream-data.model";

export interface Stream {
    type: StreamType;
    data: StreamData;
}