import { QueryHandler } from './query/query-handler';
import { Query } from './query/query';
import { Command } from './command/command';
import { CommandHandler } from './command/command-handler';
import { CQRSBus } from './base/cqrsbus.class';

export default {
  CQRSBus,
  Command,
  CommandHandler,
  Query,
  QueryHandler,
};
