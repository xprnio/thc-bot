import { UserJourney } from '../services/journey.service';
import { JourneyOption, JourneyType } from '../types/journey.type';

export abstract class ConversationResource {
  protected constructor(
    public readonly type: JourneyType,
    public readonly key: string,
    public readonly content: string[],
    public readonly response: string | null,
    public readonly is_last: boolean,
  ) {}

  static from({ journey, response }: UserJourney, isLast = false): ConversationResource {
    switch (journey.type) {
      case JourneyType.Information: {
        return new ConversationInformationResource(journey.key, journey.content, isLast);
      }
      case JourneyType.Prompt: {
        return new ConversationPromptResource(journey.key, journey.content, response, isLast, {
          pattern: String(journey.pattern),
        });
      }
      case JourneyType.Options: {
        return new ConversationOptionsResource(journey.key, journey.content, response, isLast, {
          options: journey.options,
        });
      }
    }
  }
}

export class ConversationInformationResource extends ConversationResource {
  public constructor(key: string, content: string[], isLast: boolean) {
    super(JourneyType.Information, key, content, null, isLast);
  }
}

export type ConversationPromptOptions = { pattern: string };
export class ConversationPromptResource extends ConversationResource {
  public readonly pattern?: string;

  public constructor(
    key: string,
    content: string[],
    response: string,
    isLast: boolean,
    { pattern }: ConversationPromptOptions,
  ) {
    super(JourneyType.Prompt, key, content, response, isLast);
    this.pattern = pattern;
  }
}

export type ConversationOptionsConfig = { options: JourneyOption[] };
export class ConversationOptionsResource extends ConversationResource {
  public readonly options: undefined | JourneyOption[];

  public constructor(
    key: string,
    content: string[],
    response: string,
    isLast: boolean,
    { options }: ConversationOptionsConfig,
  ) {
    super(JourneyType.Options, key, content, response, isLast);

    this.options = options;
  }
}
