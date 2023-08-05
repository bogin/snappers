// import Container from 'typedi';
import { StreamerFactory } from './factories/streamer.factory';
import { Streams } from './configurations/streams.configurations';
import { cloneDeep } from 'lodash';


const streams = cloneDeep(Streams);
const streamerFactory = new StreamerFactory()
for (const config of streams) {
    const streamer = streamerFactory.create(config.type);
    (streamer as any).stream(config.data);
}


