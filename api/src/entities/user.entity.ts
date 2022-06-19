import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() name: string;

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt?: Date;
}
