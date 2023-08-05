import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { CommandArg } from '../models/interfaces/command-args.model';
import { EventHandler } from '../models/interfaces/event-handler.model';

export class SpawnHelper {
    private args: string[];
    private command: string;
    private length_in_seconds?: number;

    constructor(command: string, commandArgs: CommandArg[], length_in_seconds?: number) {
        this.command = command;
        this.length_in_seconds = length_in_seconds;
        this.args = [];
        
        commandArgs.forEach((commandArg: CommandArg) => {
            this.args.push(...commandArg.flags);
            this.args.push(commandArg.value);
        });
    }

    spawn = (eventHandlers?: EventHandler[]): void => {
        const process = spawn(this.command, this.args);
        this.setEventHandlers(eventHandlers, process);
        this.setProcessErrorHandler(process);
        this.setProcessLength(process);
    }

    private setProcessErrorHandler = (process: ChildProcessWithoutNullStreams) => {
        process.on('error', (error: any) => {
            console.log('spawn helper: Error executing command: ', error);
        });
    }

    private setProcessLength = (process: ChildProcessWithoutNullStreams) => {
        if (!!this.length_in_seconds) {
            setTimeout(() => {
                process.kill();
                console.log('kill')

            }, this.length_in_seconds * 1000);
        }
    }

    private setEventHandlers = (eventHandlers: EventHandler[], process: ChildProcessWithoutNullStreams) => {
        eventHandlers.forEach(eventHandler => {
            if (eventHandler) {
                process.on(eventHandler.name, eventHandler.handler);
            }
        });
    }
}