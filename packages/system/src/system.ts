import { Procedure } from './procedure';

export class System {
  public async execute(procedures: Array<Procedure<unknown, unknown>>) {
    return procedures.reduce((prev, curr) => prev.then((output) => curr.run(output)), Promise.resolve());
  }
}
