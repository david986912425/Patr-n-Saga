import { Module } from '@nestjs/common';
import { CommunicationModule } from './modules/communication/communication.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule, CommunicationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
