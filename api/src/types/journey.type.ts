import { UserKey } from '../services/journey.service';

export enum JourneyType {
  Information = 'information',
  Prompt = 'prompt',
  Options = 'options',
}

export type JourneyOption = {
  key: string;
  label: string;
};

type JourneyResponse = {
  userKey: UserKey;
  value: null | string;
  options?: JourneyOption[];
};
type JourneyNavigator = (key: string) => void;

export type JourneyHandler = (response: JourneyResponse, next: JourneyNavigator) => void | Promise<void>;
export type JourneyKey = string;

export type JourneyGroup = {
  key: JourneyKey;
  journey: Journey[];
};
export type Journey = {
  key: JourneyKey;
  type: JourneyType;
  content: string[];

  pattern?: RegExp;
  options?: JourneyOption[];
  handleResponse?: JourneyHandler;
  next?: JourneyKey;
  isLast?: boolean;
};
