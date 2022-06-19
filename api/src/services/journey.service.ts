import { Injectable } from '@nestjs/common';
import onboardingJourney from '../journeys/onboarding.journey';

import type { Journey, JourneyKey } from '../types/journey.type';

export type UserKey = string;
export type UserData = {
  current: JourneyKey;
  journeys: Map<JourneyKey, UserJourney>;
};
export type UserJourney = { journey: Journey; response?: null | string };

@Injectable()
export class JourneyService {
  private static readonly Journeys = [onboardingJourney()];

  private journeys: Map<JourneyKey, Journey> = new Map();
  private users: Map<UserKey, UserData> = new Map();

  constructor() {
    JourneyService.Journeys.forEach(({ key, journey }) => {
      journey.forEach((journey) => {
        this.journeys.set(`${key}.${journey.key}`, {
          ...journey,
          key: `${key}.${journey.key}`,
        });
      });
    });
  }

  getCurrentJourney(userKey: UserKey): Journey {
    if (!this.users.has(userKey)) {
      this.users.set(userKey, {
        current: 'onboarding.welcome',
        journeys: new Map(),
      });
    }

    const { current } = this.users.get(userKey);
    if (!this.journeys.has(current)) return null;

    return this.journeys.get(current);
  }

  isLastStep(journeyKey: JourneyKey): boolean {
    const index = JourneyService.Journeys.findIndex((journey) => journey.key === journeyKey);
    return index === JourneyService.Journeys.length - 1;
  }

  getUserJourneys(userKey: UserKey): UserJourney[] {
    if (!this.users.has(userKey)) {
      this.users.set(userKey, {
        current: 'onboarding.welcome',
        journeys: new Map(),
      });
    }

    const { journeys } = this.users.get(userKey);
    return [...journeys.values()];
  }

  submitJourneyResponse(userKey: UserKey, response: null | string): void {
    const journey = this.getCurrentJourney(userKey);
    if (!journey) return;

    const { journeys } = this.users.get(userKey);

    if (journey.next) {
      journeys.set(journey.key, { journey, response });
      this.users.set(userKey, { current: journey.next, journeys });
      return;
    }

    if (journey.handleResponse) {
      journey.handleResponse({ userKey, value: response }, (journeyKey) => {
        journeys.set(journey.key, { journey, response });
        this.users.set(userKey, { current: journeyKey, journeys });
      });
    }
  }

  setUserJourney(userKey: UserKey, journeyKey: JourneyKey) {
    if (!this.journeys.has(journeyKey)) return;
    const { journeys } = this.users.get(userKey);

    this.users.set(userKey, {
      current: journeyKey,
      journeys,
    });
  }
}
