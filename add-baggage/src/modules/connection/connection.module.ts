import { Module } from '@nestjs/common';
import { SearchRoadConnectionService } from './SearchRoadConnection.service';

@Module({
  providers: [SearchRoadConnectionService],
  exports: [SearchRoadConnectionService],
})
export class ConnectionModule {}
