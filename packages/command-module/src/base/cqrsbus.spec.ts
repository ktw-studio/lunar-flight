// eslint-disable-next-line max-classes-per-file
import { CQRSBus } from './cqrsbus.class';
import { Query } from '../query/query';
import { QueryHandler } from '../query/query-handler';

const CONCRETE_QUERY_KEY = 'concrete-query-key';

interface ConcreteQueryPayload { name: string; }

class ConcreteQuery extends Query<ConcreteQueryPayload> {
  key=CONCRETE_QUERY_KEY;
}

class ConcreteQueryHandler extends QueryHandler<ConcreteQuery> {
  constructor() {
    super(CONCRETE_QUERY_KEY);
  }

  async handle(handleable: ConcreteQuery): Promise<unknown> {
    return Promise.resolve(handleable);
  }
}

describe('CQRS bus', () => {
  test('should throw an error when handler is already registered', async (done) => {
    const bus = new CQRSBus();
    bus.registerHandler(new ConcreteQueryHandler());

    expect(() => bus.registerHandler(new ConcreteQueryHandler())).toThrowError('Cannot register multiple handlers for key: "concrete-query"');

    done();
  });

  test('should allow register multiple handlers if options provided', async (done) => {
    const bus = new CQRSBus({ forbidMultipleHandlers: false });

    bus.registerHandler(new ConcreteQueryHandler());

    expect(() => bus.registerHandler(new ConcreteQueryHandler())).not.toThrowError();

    done();
  });

  test('should throw an error when handleable is not registered', async (done) => {
    const bus = new CQRSBus();

    await expect(async () => bus.handle(new ConcreteQuery({ name: 'name' }))).rejects.toThrowError('There is no handler for: ConcreteQuery');

    done();
  });

  test('should handle ConcreteQuery', async (done) => {
    const bus = new CQRSBus();

    bus.registerHandler(new ConcreteQueryHandler());

    const result = await bus.handle(new ConcreteQuery({ name: 'concrete-query-payload-name' }));

    expect(result).toBeInstanceOf(ConcreteQuery);

    done();
  });
});
