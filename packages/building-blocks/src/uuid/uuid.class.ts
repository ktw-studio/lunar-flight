import { v4, validate } from 'uuid';

export class UUID {
  private readonly id: string;

  constructor(id?: string) {
    if (id && validate(id)) {
      this.id = id;
    } else {
      this.id = v4();
    }
  }

  public getValue() {
    return this.id;
  }

  public isEqual(value: UUID | string) {
    if (value instanceof UUID) {
      return value.getValue() === this.id;
    }

    return this.id === value;
  }
}
