import { Module } from '@nestjs/common';
import { SeatReservationConnectionService } from './seatReservationConnection.service';

@Module({
  providers: [SeatReservationConnectionService],
  exports: [SeatReservationConnectionService],
})
export class ConnectionModule {}
