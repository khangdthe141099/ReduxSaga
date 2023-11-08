import unset from "lodash/unset";
import type { z } from "zod";
import { IUser, User } from './user'

export class DTO {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  protected safeParseResponse?<T>(schema: z.ZodObject<any>, response: any): T {
    const parsedResult = schema.safeParse(response);

    if (!parsedResult.success) {
      parsedResult.error.issues.map(({ path }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        unset(response, path.join("."));
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return parsedResult.success ? parsedResult.data : response;
  }
}
