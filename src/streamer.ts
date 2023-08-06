import { SnappersService } from "./services/snappers.service";

// TODO REMOVE TYPEDI
const snappersHomeAssignmentService = new SnappersService();
snappersHomeAssignmentService.startStreamingSequence();
