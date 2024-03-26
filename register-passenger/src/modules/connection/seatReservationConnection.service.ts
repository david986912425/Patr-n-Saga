import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class SeatReservationConnectionService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'addbaggage',
        port: 3031,
      },
    });
  }

  getClient() {
    return this.client;
  }

  async connectClient() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'addbaggage',
        port: 3031,
      },
    });
    await this.client.connect();
  }
}
