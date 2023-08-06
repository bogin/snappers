import { cloneDeep } from 'lodash';
import { Streams } from '../configurations/streams.configurations';
import { StreamerFactory } from '../factories/streamer.factory';
import { Stream } from '../models/interfaces/stream.model';


export class SnappersService {

    streamsConfigurations: Stream[] = cloneDeep(Streams);
    streamerFactory = new StreamerFactory();

    constructor() {
        this.streamsConfigurations = cloneDeep(Streams);
        this.streamerFactory = new StreamerFactory();
    }

    startStreamingSequence = () => {
        let currentTime = 0;

        for (const streamConfiguration of this.streamsConfigurations) {
            setTimeout(() => this.stream(streamConfiguration), currentTime * 1000);
            currentTime += streamConfiguration.data.length_in_seconds;
        }
    }


    stream = (stream: Stream) => {
        try {
            const streamer = this.streamerFactory.create(stream.type);
            streamer.stream(stream.data);
        } catch (e) {
            console.log('Could not stream', JSON.stringify(stream));
            console.log('Error: ', e);
        }
    }

}