import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Bus } from './bus.entity';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  uuid: string;

  @ManyToOne(() => Bus)
  @JoinColumn({ name: 'bus_uuid' })
  bus: Bus;

  @Column()
  seat_number: number;

  @Column({ default: false })
  is_busy: boolean;

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
}
