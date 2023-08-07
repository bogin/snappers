import { cloneDeep } from 'lodash';
import { Streams } from '../configurations/streams.configurations';
import { StreamerFactory } from '../factories/streamer.factory';
import { Stream } from '../models/interfaces/stream.model';


export class SnappersService {

    streamsConfigurations: Stream[];
    streamerFactory: StreamerFactory;

    constructor() {
        this.streamsConfigurations = cloneDeep(Streams);
        this.streamerFactory = new StreamerFactory();
    }

    startStreamingSequence = () => {
        let time_delay_in_sec = 0;

        for (const streamConfiguration of this.streamsConfigurations) {
            this.stream(streamConfiguration, time_delay_in_sec * 1000);
            time_delay_in_sec += streamConfiguration.data.length_in_seconds;
        }
    }


    stream = (stream: Stream, time_delay_in_sec: number) => {
        setTimeout(() => {
            try {
                const streamer = this.streamerFactory.create(stream.type);
                streamer.stream(stream.data);
            } catch (e) {
                console.log('Could not stream', JSON.stringify(stream));
                console.log('Error: ', e);
            }
        }, time_delay_in_sec * 1000);
    }

}