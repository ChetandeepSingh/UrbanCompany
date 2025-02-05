import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Slot } from '../slot/slot.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => Slot, (slot) => slot.id)
  slot: Slot;

  @Column({ default: 'pending' }) // pending, confirmed, or cancelled
  status: string;
}