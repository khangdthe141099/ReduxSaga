import { api } from "../../lib/request";

export const getUserDetail = (url: string) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response = api.get(url);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const createUser = (url: string, data: any) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response = api.post(url, data);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return response;
  } catch (err) {
    console.log(err);
  }
};
