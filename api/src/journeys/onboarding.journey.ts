import { JourneyGroup, JourneyType } from '../types/journey.type';

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
        ],
        next: 'onboarding.info.email',
      },
      {
        key: 'welcome',
        type: JourneyType.Information,
        content: [
          'My name is Robert',
          'I am your personal AI trade helper',
          'You just tell me what your risk tolerance is, deposit money on your account to trade crypto with, browse and find strategies that suit your goals, and let me do all the rest!',
        ],
        next: 'onboarding.info.name',
      },
      {
        key: 'info.name',
        type: JourneyType.Prompt,
        content: ["Let's start with some basic information", "What's your name?"],
        pattern: /^[A-Z\s]+$/,
        next: 'onboarding.info.risk-tolerance',
      },
      {
        key: 'info.risk-tolerance',
        type: JourneyType.Options,
        content: [
          'We trade automatically using the strategies you select that match your risk tolerance and goals.',
          'Do keep in mind that although high risk also equals high reward: NO PROFITS ARE GUARANTEED.',
          'Please tell me your risk tolerance so we could find suitable strategies for you',
        ],
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
        content: [
          'Thank you for the info',
          'I will now look into my collection of libraries and try to find the best fit for you',
        ],
      },
    ],
  };
};

export default OnboardingJourney;
