import { deepStrictEqual } from 'assert';

export abstract class ValueObject<T> {
  public constructor(protected readonly props: T) {}

  public get<K extends keyof T>(key: K): T[K] {
    return this.props[key];
  }

  public isEqual(comparable: ValueObject<unknown>) {
    try {
      deepStrictEqual(comparable.props, this.props);
    } catch (e) {
      return false;
    }

    return true;
  }
}
