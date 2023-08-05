import { CommandArg } from "../../../models/interfaces/command-args.model";

export const FaceBookLiveDefualtArgs: CommandArg[] = [
    { flags: ['-loglevel'], value: 'repeat+level+error', model_key: ''},
    { flags: ['-re', '-i'], value: '', model_key: 'video_src' },
    { flags: ['-c:v'], value: 'libx264', model_key: 'decoder' },
    { flags: ['-preset'], value: 'veryfast', model_key: 'preset' },
    { flags: ['-maxrate'], value: '3000k', model_key: 'maxrate' },
    { flags: ['-bufsize'], value: '6000k', model_key: 'bufsize' },
    { flags: ['-g'], value: '22', model_key: 'keyFreamRate' },
    { flags: ['-b:v'], value: '3000k', model_key: 'videoResolution' },
    { flags: ['-c:a'], value: 'aac', model_key: 'encoder' },
    { flags: ['-f', 'flv'], value: '', model_key: 'outFileFormant' },

    // TODO  change model_key logick
]