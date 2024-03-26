import { Module } from '@nestjs/common';
import { CommunicationController } from './communication.controller';
import { CommunicationService } from './communication.service';
import { ConnectionModule } from '../connection/connection.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Baggage } from '../../entities/baggage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Baggage]), ConnectionModule],
  controllers: [CommunicationController],
  providers: [CommunicationService],
})
export class CommunicationModule {}
