import { Streams } from "./configurations/streams.configurations";
import { StreamingService } from "./services/streaming.service";

const snappersHomeAssignmentService = new StreamingService(Streams);
snappersHomeAssignmentService.startStreamingSequence();
