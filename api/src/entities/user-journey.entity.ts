import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class UserJourneyEntity extends BaseEntity {
  @PrimaryGeneratedColumn() id: string;
  @Column() journeyId: string;
  @ManyToOne(() => UserEntity) user: Promise<UserEntity>;
}
