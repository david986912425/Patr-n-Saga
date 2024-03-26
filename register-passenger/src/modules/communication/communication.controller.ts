import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommunicationService } from './communication.service';
import { EventPattern } from '@nestjs/microservices';
import { PATTERNS } from './communication.constants';
import { RegisterPassengerDto } from './Dto/registerPassenger.dto';

@Controller('api/v1/passenger')
export class CommunicationController {
  constructor(private communicationService: CommunicationService) {}

  @Get('/')
  getRoutes() {
    return this.communicationService.getRoutes();
  }
  @Post('/')
  async registerPassenger(@Body() registrationData: RegisterPassengerDto) {
    return await this.communicationService.registerPassenger(registrationData);
  }

  @EventPattern(PATTERNS.EVENTS.RECEIVE_MESSAGE)
  receiveMessageFromEventB2(data: boolean) {
    if (data) {
      return 'Se registro correctamente';
    }
  }
}
