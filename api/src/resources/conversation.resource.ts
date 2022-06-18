import { UserJourney } from '../services/journey.service';
import { Journey, JourneyOption, JourneyType } from '../types/journey';

export abstract class ConversationResource {
  protected constructor(
    public readonly type: JourneyType,
    public readonly key: string,
    public readonly content: string[],
    public readonly response: string | null,
  ) {}

  static from({ journey, response }: UserJourney): ConversationResource {
    switch (journey.type) {
      case JourneyType.Information: {
        return new ConversationInformationResource(
          journey.key,
          journey.content,
        );
      }
      case JourneyType.Prompt: {
        return new ConversationPromptResource(
          journey.key,
          journey.content,
          response,
          { pattern: String(journey.pattern) },
        );
      }
      case JourneyType.Options: {
        return new ConversationOptionsResource(
          journey.key,
          journey.content,
          response,
          { options: journey.options },
        );
      }
    }
  }
}

export class ConversationInformationResource extends ConversationResource {
  public constructor(key: string, content: string[]) {
    super(JourneyType.Information, key, content, null);
  }
}

export type ConversationPromptOptions = { pattern: string };
export class ConversationPromptResource extends ConversationResource {
  public readonly pattern?: string;

  public constructor(
    key: string,
    content: string[],
    response: string,
    { pattern }: ConversationPromptOptions,
  ) {
    super(JourneyType.Prompt, key, content, response);
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
    { options }: ConversationOptionsConfig,
  ) {
    super(JourneyType.Options, key, content, response);

    this.options = options;
  }
}
