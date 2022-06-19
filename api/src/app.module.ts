import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConversationController } from './controllers/conversation.controller';
import { DashboardController } from './controllers/dashboard.controller';
import { StrategiesController } from './controllers/strategies.controller';
import { JourneyService } from './services/journey.service';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
  controllers: [ConversationController, DashboardController, StrategiesController],
  providers: [JourneyService],
})
export class AppModule {}
