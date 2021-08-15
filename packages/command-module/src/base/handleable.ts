export abstract class Handleable<T> {
  protected abstract readonly key:string;

  protected constructor(public readonly payload:T) {
  }

  public getKey(): string {
    return this.key;
  }
}
