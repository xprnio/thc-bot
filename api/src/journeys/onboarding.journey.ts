import { JourneyGroup, JourneyType } from '../types/journey';

const OnboardingJourney = (): JourneyGroup => {
  return {
    key: 'onboarding',
    journey: [
      {
        key: 'welcome',
        type: JourneyType.Information,
        content: [
          'Welcome',
          'I will be your guided instructor for the day',
          'Please fasten your seatbelts and prepare for liftoff',
          'We are about to set sail to the moon and beyond',
          'Godspeed',
        ],
        next: 'onboarding.info.email',
      },
      {
        key: 'info.email',
        type: JourneyType.Prompt,
        content: ["Let's start creating an account for you!", "What's your email address?"],
        pattern: /^[a-z\d.]+@([a-z\d]+\.?)+$/,
        next: 'onboarding.info.name',
      },
      {
        key: 'info.name',
        type: JourneyType.Prompt,
        content: ["Let's start with your name"],
        pattern: /^[A-Z\s]+$/,
        next: 'onboarding.info.risk-tolerance',
      },
      {
        key: 'info.risk-tolerance',
        type: JourneyType.Options,
        content: ['What is your risk tolerance?'],
        options: [
          {
            key: 'low',
            label: 'Low tolerance',
          },
          {
            key: 'medium',
            label: 'Medium tolerance',
          },
          {
            key: 'high',
            label: 'High tolerance',
          },
        ],
        next: 'onboarding.complete',
      },
      {
        key: 'complete',
        type: JourneyType.Information,
        content: ['We got all we need from you', 'You are of no use to use anymore', 'Good bye'],
      },
    ],
  };
};

export default OnboardingJourney;
