import { Module } from '@nestjs/common';
import { ConversationController } from './controllers/conversation.controller';
import { DashboardController } from './controllers/dashboard.controller';
import { JourneyService } from './services/journey.service';

@Module({
  imports: [],
  controllers: [ConversationController, DashboardController],
  providers: [JourneyService],
})
export class AppModule {}
