import { AppError } from "@lunar-flight/command-module";

const err = new AppError("asd");

console.log(err.getHey());
