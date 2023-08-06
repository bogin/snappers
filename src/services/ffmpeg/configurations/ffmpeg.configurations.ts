export const FFmpegConfigurations = {
    command_key: 'ffmpeg',
    exitHandler: (errorCode: number, commandSignal: number) => {
        if (errorCode) {
            console.error('FFmpeg service: stream command exited with code', errorCode);
            if (errorCode === 0) {
                throw new Error('FFmpeg service: video has ended before live feed.');
            }
            if (errorCode === 1) {
                throw new Error('FFmpeg service: video was not found.');
            }
        } else if (commandSignal) {
            console.error('FFmpeg service: stream command was killed with signal', commandSignal);
        } else {
            console.log('FFmpeg service: stream command exited okay');
        }
    }
};
