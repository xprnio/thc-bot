import { BadRequestException, Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { EnvelopeInterceptor } from '../interceptors/envelope.interceptor';
import { ConversationResource } from '../resources/conversation.resource';
import { JourneyService } from '../services/journey.service';

@Controller('/conversation')
@UseInterceptors(EnvelopeInterceptor)
export class ConversationController {
  constructor(private readonly journeys: JourneyService) {}

  @Get(':username')
  async getCurrentConversation(@Param('username') username: string) {
    const journey = this.journeys.getCurrentJourney(username);
    if (journey === null) {
      this.journeys.setUserJourney(username, 'onboarding.welcome');
      return this.getCurrentConversation(username);
    }

    return ConversationResource.from({ journey });
  }

  @Get(':username/history')
  async getConversationHistory(@Param('username') username: string) {
    const journeys = this.journeys.getUserJourneys(username);

    if (!journeys) return [];
    return journeys.map(ConversationResource.from);
  }

  @Post(':username')
  async respondToConversation(@Param('username') username: string, @Body('value') value: string | null) {
    const journey = this.journeys.getCurrentJourney(username);
    if (!journey) {
      throw new BadRequestException('No conversation to respond to');
    }

    this.journeys.submitJourneyResponse(username, value);
    return this.getCurrentConversation(username);
  }
}
