export abstract class Handleable<T> {
  protected constructor(private readonly key:string, private readonly payload:T) {
  }

  public getKey(): string {
    return this.key;
  }

  public getPayload() {
    return this.payload;
  }
}
