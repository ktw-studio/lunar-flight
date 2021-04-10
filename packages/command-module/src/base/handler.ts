export abstract class Handler<T> {
  protected constructor(private readonly key:string) {
  }

  abstract handle(handleable:T):Promise<unknown>;

  public getKey(): string {
    return this.key;
  }
}
