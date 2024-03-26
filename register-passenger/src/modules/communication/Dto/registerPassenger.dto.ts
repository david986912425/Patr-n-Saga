import { IsUUID, IsNumber, IsDate, IsArray } from 'class-validator';
import { Transform } from 'class-transformer';
export class RegisterPassengerDto {
  @IsUUID()
  passenger_uuid: string;
  @IsUUID()
  road_uuid: string;
  @IsUUID()
  bus_uuid: string;
  @IsNumber()
  number_seat: number;
  @Transform(({ value }) => new Date(value))
  @IsDate()
  date_road: Date;
  @IsArray()
  baggage: [];
}
