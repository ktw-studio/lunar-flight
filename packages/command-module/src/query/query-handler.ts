import { Handler } from '../base/handler';
import { Query } from './query';

export abstract class QueryHandler<T, K extends Query<unknown>> extends Handler<T, K> {
}
