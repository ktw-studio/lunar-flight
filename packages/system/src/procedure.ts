export abstract class Procedure<ExpectedT, ReturnedT> {
  abstract run(props:ExpectedT): Promise<ReturnedT>;
}
