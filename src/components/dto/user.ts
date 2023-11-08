import { z } from "zod";

import { DTO } from "./dto";
import { unset } from "lodash";

export const User = z
  .object({
    name: z
      .string()
      .min(1, { message: "Name must be greater than 1 character" })
      .max(10, { message: "Name must be less than 10 character " }),
    age: z.number().positive(),
    password: z.string().min(4),
    confirmpassword: z.string().min(4),
  })
  .partial()
  .superRefine(({ password, confirmpassword }, ctx) => {
    if (confirmpassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });

export type IUser = z.infer<typeof User>;

export class UserDTO extends DTO {
  name?;
  age?;
  password?;
  confirmpassword?;
  errorMessage?;

  constructor(response: IUser) {
    super();

    const parsedResult = User.safeParse(response);

    let errorMessage = [];

    if (!parsedResult.success) {
      parsedResult.error.issues.map(({ path }) => {
        unset(response, path.join("."));
      });

      errorMessage = parsedResult.error.issues.map(
        (item: { message: string }, index: number) => ({
          id: index,
          msg: item.message,
        })
      );

      const { name, age, password, confirmpassword } = response;

      this.errorMessage = errorMessage;
      this.name = name;
      this.age = age;
      this.password = password;
      this.confirmpassword = confirmpassword;
    } else {
      const { name, age, password, confirmpassword } = parsedResult.data;

      this.name = name;
      this.age = age;
      this.password = password;
      this.confirmpassword = confirmpassword;
    }
  }
}
