import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import { Seat } from "./seat.entity";

@Entity()
export class Bus {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  uuid: string;

  @Column({ default: true })
  is_active: boolean;

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

  @OneToMany(() => Seat, (seat) => seat.bus)
  seats: Seat[];
}
