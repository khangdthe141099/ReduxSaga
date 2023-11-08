import axios from "axios";

export const getUserDetail = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
