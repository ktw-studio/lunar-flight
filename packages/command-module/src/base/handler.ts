export abstract class Handler<T, K> {
  protected abstract readonly key:string;

  constructor(protected readonly dependencies:T) {
  }

  abstract handle(handleable:K):Promise<unknown>;

  public getKey(): string {
    return this.key;
  }
}
