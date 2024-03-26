import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  uuid: string;

  @Column()
  bus_uuid: string;

  @Column()
  road_uuid: string;

  @Column()
  number_seat: number;

  @CreateDateColumn({
    type: 'timestamp',
    precision: 6,
    nullable: false,
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    precision: 6,
    nullable: false,
  })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
