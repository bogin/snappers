
import { StreamData } from "../models/interfaces/stream-data.model";

export abstract class Streamer {
    public abstract stream(data: StreamData): void;
}