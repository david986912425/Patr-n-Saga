import { Controller } from '@nestjs/common';
import { CommunicationService } from './communication.service';
import { PATTERNS } from './communication.constants';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/v1/search-road')
export class CommunicationController {
  constructor(private communicationService: CommunicationService) {}

  /**
   * EventPattern
   * @param reservationUuid
   * @param baggage
   */
  @MessagePattern(PATTERNS.MESSAGES.SEND_MESSAGE)
  async receiveMessageFromEventB1(reservationUuid) {
    const { uuid, baggage } = reservationUuid;
    return await this.communicationService.addBaggage(uuid, baggage);
  }
}
