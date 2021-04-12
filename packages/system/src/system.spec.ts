// eslint-disable-next-line max-classes-per-file
import { Procedure } from './procedure';
import { System } from './system';

describe('Test', () => {
  test('System executes all procedures', async (done) => {
    const runTimeLog = [];

    interface FirstProcedureI { firstProcedure: string }

    class FirstProcedure extends Procedure<null, FirstProcedureI> {
      public async run(): Promise<FirstProcedureI> {
        runTimeLog.push('first-procedure');
        return { firstProcedure: 'first-procedure-executed' };
      }
    }

    interface SecondProcedureI { secondProcedure: string }

    class SecondProcedure extends Procedure<FirstProcedureI, SecondProcedureI> {
      public async run(props: FirstProcedureI): Promise<SecondProcedureI> {
        runTimeLog.push('second-procedure');
        runTimeLog.push(props.firstProcedure);
        return { secondProcedure: `content of second procedure with first ${props.firstProcedure}` };
      }
    }

    const system = new System();

    const serverRuntime = [new FirstProcedure(), new SecondProcedure()];

    await system.execute(serverRuntime);

    expect(runTimeLog.length).toEqual(3);
    expect(runTimeLog[0]).toEqual('first-procedure');
    expect(runTimeLog[1]).toEqual('second-procedure');
    expect(runTimeLog[2]).toEqual('first-procedure-executed');
    done();
  });
});
