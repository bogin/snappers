import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { CommandArg } from '../models/interfaces/command-args.model';
import { EventHandler } from '../models/interfaces/event-handler.model';
import { Command } from '../models/interfaces/command.model';

export class CMDHelper {
    private errorHandler: EventHandler = {
        name: 'error',
        handler: (error: any) => {
            console.log('cmd helper: Error executing command: ', error);
        }
    };

    constructor() {}

    createCommand = (data: { commandName: string, commandArgs: CommandArg[], eventHandlers?: EventHandler[], length_in_seconds?: number}): Command => {
        return { 
            name: data.commandName,
            args: this.getArgsAsStringArray(data.commandArgs),
            length_in_seconds: data.length_in_seconds,
            eventHandlers: data.eventHandlers
        };
    }

    executeCommand = (command: Command): void => {
        const process = spawn(command.name, command.args);
        this.setCommandHandlers(command.eventHandlers, process);
        if (command.length_in_seconds >= 0) {
            this.setProcessLength(process, command.length_in_seconds);
        }
    }


    private setProcessLength = (process: ChildProcessWithoutNullStreams, processLifeLengthInSec: number) => {
        setTimeout(() => {
            process.kill();
        }, processLifeLengthInSec * 1000);
    }

    private setCommandHandlers = (eventHandlers: EventHandler[], process: ChildProcessWithoutNullStreams) => {
        [...(eventHandlers || []), this.errorHandler].forEach(eventHandler => {
            process.on(eventHandler.name, eventHandler.handler);
        });
    }

    private getArgsAsStringArray = (commandArgs: CommandArg[]): string[] => {
        const args = [];

        commandArgs.forEach((commandArg: CommandArg) => {
            args.push(...commandArg.flags);
            args.push(commandArg.value);
        });
        return args;
    }
}