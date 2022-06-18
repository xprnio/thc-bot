export class Envelope<TPayload, TError = Error> {
  public readonly success: boolean;

  public constructor(
    public readonly data?: TPayload,
    public readonly error?: TError,
  ) {
    this.success = !error;
  }

  static from<TPayload, TError = Error>(
    data: TPayload,
    error?: TError,
  ): Envelope<TPayload, TError> {
    return new Envelope<TPayload, TError>(data, error);
  }
}
