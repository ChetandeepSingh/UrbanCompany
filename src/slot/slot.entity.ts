import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Carpenter } from '../carpenter/carpenter.entity';

@Entity()
export class Slot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @Column({ default: false })
  isBooked: boolean;

  @ManyToOne(() => Carpenter, (carpenter) => carpenter.slots)
  carpenter: Carpenter;
}