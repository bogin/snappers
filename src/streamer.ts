// import Container from 'typedi';
// TODO REMOVE TYPEDI
import { StreamerFactory } from './factories/streamer.factory';
import { Streams } from './configurations/streams.configurations';
import { cloneDeep } from 'lodash';
import { Stream } from './models/interfaces/stream.model';


const streams: Stream[] = cloneDeep(Streams);
const streamerFactory = new StreamerFactory();

const startStreamingSequence = () => {
    let currentTime = 0;

    for (const stream of streams) {
        setTimeout(() => {
            console.log(`Starting stream: ${stream.data.video_src}`);
            const streamer = streamerFactory.create(stream);
            (streamer as any).stream(stream.data);
        }, currentTime * 1000);

        currentTime += stream.data.length_in_seconds;
    }
}

startStreamingSequence();
