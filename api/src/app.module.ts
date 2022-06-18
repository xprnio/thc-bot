import { Module } from '@nestjs/common';
import { ConversationController } from './controllers/conversation.controller';
import { JourneyService } from './services/journey.service';

@Module({
  imports: [],
  controllers: [ConversationController],
  providers: [JourneyService],
})
export class AppModule {}
