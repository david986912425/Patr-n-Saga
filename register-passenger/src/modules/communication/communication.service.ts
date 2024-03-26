import { Injectable } from '@nestjs/common';
import { SeatReservationConnectionService } from '../connection/seatReservationConnection.service';
import { firstValueFrom } from 'rxjs';
import { PATTERNS } from './communication.constants';
import { RegisterPassengerDto } from './Dto/registerPassenger.dto';
import { Bus } from '../../entities/bus.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from '../../entities/reservation.entity';
import { Seat } from '../../entities/seat.entity';

@Injectable()
export class CommunicationService {
  constructor(
    private microServiceConnection: SeatReservationConnectionService,
    @InjectRepository(Bus)
    private busRepository: Repository<Bus>,
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
    @InjectRepository(Seat)
    private seatRepository: Repository<Seat>,
  ) {}

  async sendEventPattern(uuid: string, baggage: []) {
    try {
      await this.microServiceConnection.connectClient();
      return firstValueFrom(
        this.microServiceConnection
          .getClient()
          .emit(PATTERNS.EVENTS.RECEIVE_MESSAGE, {
            uuid,
            baggage,
          }),
      );
    } catch (error) {
      console.error('No hay conexión');
      return false;
    }
  }

  async registerPassenger(data: RegisterPassengerDto) {
    try {
      const bus = await this.busRepository.findOne({
        where: {
          uuid: data.bus_uuid,
        },
        relations: ['seats'],
      });

      const seat = bus.seats.find(
        (seat) => seat.seat_number === data.number_seat,
      );

      if (!seat.is_busy) {
        const reservation = await this.createReservation(data);
        await this.updateSeatBusy(seat.uuid);
        return await this.sendEventPattern(reservation.uuid, data.baggage);
      } else {
        throw new Error('The seat is already occupied.');
      }
    } catch (error) {
      throw error;
    }
  }

  async createReservation(data: RegisterPassengerDto, manager?: EntityManager) {
    const reservation = this.reservationRepository.create(data);
    await (manager
      ? manager.save(reservation)
      : this.reservationRepository.save(reservation));
    return reservation;
  }

  async updateSeatBusy(seatUuid: string, manager?: EntityManager) {
    const seat = await this.seatRepository.findOne({
      where: { uuid: seatUuid },
    });
    seat.is_busy = true;
    await (manager ? manager.save(seat) : this.seatRepository.save(seat));
  }

  async getRoutes() {
    return true;
  }
}
