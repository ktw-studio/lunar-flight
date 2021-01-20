export class AppError {
  constructor(public readonly message: string) {
  }

  public getHey() {
    return 'hey';
  }
}
