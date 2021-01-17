import { AppError } from "@lunar-lander/apollo";

const err = new AppError("asd");

console.log(err.getHey());
