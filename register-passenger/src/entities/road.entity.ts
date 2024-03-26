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
export class Road {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  uuid: string;

  @Column()
  destine_start: string;

  @Column()
  destine_end: string;

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
