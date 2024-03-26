import { IsArray, IsNotEmpty } from 'class-validator';

export class BaggageDto {
  @IsNotEmpty()
  @IsArray()
  name: string;
}
