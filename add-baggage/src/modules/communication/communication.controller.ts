import { Controller } from '@nestjs/common';
import { CommunicationService } from './communication.service';
import { PATTERNS } from './communication.constants';
import { EventPattern } from '@nestjs/microservices';

@Controller('api/v1/search-road')
export class CommunicationController {
  constructor(private communicationService: CommunicationService) {}

  /**
   * EventPattern
   * @param reservationUuid
   * @param baggage
   */
  @EventPattern(PATTERNS.EVENTS.RECEIVE_MESSAGE)
  async receiveMessageFromEventB1(reservationUuid) {
    const { uuid, baggage } = reservationUuid;
    return await this.communicationService.addBaggage(uuid, baggage);
  }
}
