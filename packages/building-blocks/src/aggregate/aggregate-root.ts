import { UUID } from '../uuid/uuid.class';

export abstract class AggregateRoot<T> {
  protected readonly id: UUID;

  public constructor(protected props: T, id?: UUID) {
    this.id = id || new UUID();
  }

  public getID(): UUID {
    return this.id;
  }

  public get<K extends keyof T>(key: K): T[K] {
    return this.props[key];
  }

  public isEqual(comparable: AggregateRoot<unknown> | UUID | string) {
    if (comparable instanceof AggregateRoot) {
      return this.isEqual(comparable.getID());
    }

    return this.getID().isEqual(comparable);
  }
}
