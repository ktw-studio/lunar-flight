import { Handler } from '../base/handler';
import { Command } from './command';

export abstract class CommandHandler<T, K extends Command<unknown>> extends Handler<T, K> {}
