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

    createCommand = (command: { commandName: string, commandArgs: CommandArg[], data: any; eventHandlers?: EventHandler[], length_in_seconds?: number}): Command => {
        return { 
            name: command.commandName,
            args: this.getArgsAsStringArray(this.fillArgsFromData(command.commandArgs, command.data)),
            length_in_seconds: command.length_in_seconds,
            eventHandlers: command.eventHandlers
        };
    }

    executeCommand = (command: Command): void => {
        const process = spawn(command.name, command.args);
        this.setCommandHandlers(command.eventHandlers, process);
        if (command.length_in_seconds >= 0) {
            this.setProcessLength(process, command.length_in_seconds);
        }
    }

    private fillArgsFromData = (args: CommandArg[], data: any): CommandArg[] => {
        args.forEach((argument: CommandArg) => {
            if (!!argument.model_key && data[argument.model_key]) {
                argument.value = data[argument.model_key];
            }
        });

        return args;
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