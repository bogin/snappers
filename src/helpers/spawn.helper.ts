import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { CommandArg } from '../models/interfaces/command-args.model';

export class SpawnHelper {
    private args: string[];
    private command: string;
    private length_in_seconds?: number;

    constructor(command: string, commandArgs: CommandArg[], length_in_seconds?: number) {
        this.command = command;
        this.length_in_seconds = length_in_seconds;
        this.args = [];
        // TODO ADD lint
        commandArgs.forEach((commandArg: CommandArg) => {
            this.args.push(...commandArg.flags);
            this.args.push(commandArg.value);
        });
    }

    spawn = (): void => {
        const process = spawn(this.command, this.args);
        console.log('ok')

        this.setProcessErrorHandler(process);
        this.setProcessLength(process);
    }


    private setProcessErrorHandler = (process: ChildProcessWithoutNullStreams) => {
        process.on('error', (error: any) => {
            // TODO
        console.log('error')

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
}