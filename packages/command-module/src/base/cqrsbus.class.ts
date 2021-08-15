import { Handler } from './handler';
import { Handleable } from './handleable';

interface CQRSBusOptions {
  forbidMultipleHandlers: boolean;
}

export class CQRSBus {
   constructor(private readonly options:CQRSBusOptions = {
     forbidMultipleHandlers: true,
   }) {
    this.registeredHandlers = [];
  }

  private registeredHandlers: Handler<unknown, unknown>[];

  public registerHandler(handler: Handler<unknown, unknown>) {
    const isAlreadyRegistered = this.isAlreadyRegistered(handler);

    if (this.options.forbidMultipleHandlers && isAlreadyRegistered) {
      throw new Error(`Cannot register multiple handlers for key: "${handler.getKey()}"`);
    }

    this.registeredHandlers = [...this.registeredHandlers, handler];
  }

  public async handle(handleable:Handleable<unknown>) {
    const handler = this.findHandler(handleable);

    if (!handler) {
      throw new Error(`There is no handler for: ${handleable.constructor.name}`);
    }

    return handler.handle(handleable);
  }

  private isAlreadyRegistered(handler: Handler<unknown, unknown>) {
    return this.registeredHandlers.some((element) => element.getKey() === handler.getKey());
  }

  private findHandler(handleable:Handleable<unknown>) {
    return this.registeredHandlers.find((element) => element.getKey() === handleable.getKey());
  }
}
