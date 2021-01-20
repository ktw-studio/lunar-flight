import { AppError } from '@lunar-flight/command-module';

const err = new AppError('asd');

// @eslint-ignore
console.log(err.getHey());
