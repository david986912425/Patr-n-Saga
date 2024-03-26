import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class SearchRoadConnectionService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'registerpassenger',
        port: 3030,
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
        host: 'registerpassenger',
        port: 3030,
      },
    });
    await this.client.connect();
  }
}
