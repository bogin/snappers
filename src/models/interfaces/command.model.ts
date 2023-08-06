import { EventHandler } from "./event-handler.model";

export interface Command {
    name: string;
    args: string[];
    length_in_seconds?: number;
    eventHandlers?: EventHandler[];
}
