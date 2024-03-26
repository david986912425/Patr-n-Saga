import { Injectable } from '@nestjs/common';
import { SearchRoadConnectionService } from '../connection/SearchRoadConnection.service';
import { firstValueFrom } from 'rxjs';
import { PATTERNS } from './communication.constants';
import { Baggage } from '../../entities/baggage.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaggageDto } from './Dto/baggage.dto';

@Injectable()
export class CommunicationService {
  constructor(
    private searchRoadConnection: SearchRoadConnectionService,
    @InjectRepository(Baggage)
    private baggageRepository: Repository<Baggage>,
  ) {}

  async sendEventPattern(message: boolean) {
    try {
      await this.searchRoadConnection.connectClient();
      return firstValueFrom(
        this.searchRoadConnection
          .getClient()
          .emit(PATTERNS.EVENTS.RECEIVE_MESSAGE, {
            message,
          }),
      );
    } catch (error) {
      console.error('No hay conexión', error);
      return false;
    }
  }

  async addBaggage(reservationUuid: string, baggageDto: BaggageDto[]) {
    const createdBaggage = [];
    for (const item of baggageDto) {
      createdBaggage.push({
        reservation_uuid: reservationUuid,
        name: item.name,
      });
    }
    const baggager = this.baggageRepository.create(createdBaggage);
    const result = await this.baggageRepository.save(baggager);
    return this.sendEventPattern(result.length === baggageDto.length);
  }
}
