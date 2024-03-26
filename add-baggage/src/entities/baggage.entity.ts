import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class Baggage {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  uuid: string;

  @Column()
  reservation_uuid: string;

  @Column()
  name: string;
}
