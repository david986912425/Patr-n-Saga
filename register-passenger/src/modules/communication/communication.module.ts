import { Module } from '@nestjs/common';
import { CommunicationController } from './communication.controller';
import { CommunicationService } from './communication.service';
import { ConnectionModule } from '../connection/connection.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bus } from '../../entities/bus.entity';
import { Reservation } from '../../entities/reservation.entity';
import { Seat } from '../../entities/seat.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Bus, Reservation, Seat]),
    ConnectionModule,
  ],
  controllers: [CommunicationController],
  providers: [CommunicationService],
})
export class CommunicationModule {}
