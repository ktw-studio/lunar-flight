import { UUID } from '../uuid/uuid.class';
import { AggregateRoot } from './aggregate-root';

interface AggregateRootProps {}

class ConcreteAggregateRoot extends AggregateRoot<AggregateRootProps> {}

describe('Aggregate Building Block', () => {
  test('Two aggregates are equal when their ID are equal', () => {
    const uuid = new UUID();

    const aggA = new ConcreteAggregateRoot({}, uuid);
    const aggB = new ConcreteAggregateRoot({}, uuid);

    expect(aggA.isEqual(aggB)).toEqual(true);
  });

  test('Two aggregates are not equal when their ID are different', () => {
    const aggA = new ConcreteAggregateRoot({}, new UUID());
    const aggB = new ConcreteAggregateRoot({}, new UUID());

    expect(aggA.isEqual(aggB)).toEqual(false);
  });
});
