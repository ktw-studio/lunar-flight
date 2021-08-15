export abstract class Handleable<T> {
  public abstract readonly key:string;

  constructor(public readonly payload:T) {
  }

  public getKey(): string {
    return this.key;
  }
}
