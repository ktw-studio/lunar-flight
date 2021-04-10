import { Handler } from '../base/handler';
import { Query } from './query';

export abstract class QueryHandler<T extends Query<unknown>> extends Handler<T> {
  protected constructor(key:string) {
    super(key);
  }
}
