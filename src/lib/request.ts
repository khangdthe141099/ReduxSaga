import { message } from "antd";
import axios from "axios";

export const HTTP_STATUS_CONSTANTS = {
  OK: 200,
  ERROR_CODE_401: 401,
  SERVER_ERROR: "E0",
  ERROR: 400,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
} as any;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const HEADERS_MULTIPLE_PART = {
  ...HEADERS,
  "Content-Type": "multipart/form-data; boundary=something",
  Accept: "application/json",
};

export const validateStatus = (status: number): boolean => {
  return (
    status === 200 ||
    status === 201 ||
    status === 400 ||
    status === 401 ||
    status === 500
  );
};

const axiosInstance = axios.create();

//[Config API HRM]:
axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = "";

    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const api = {
  get: (endpoint: string, params: any = {}, options?: any) => {
    return axiosInstance
      .get(endpoint, {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        params: params,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        headers: HEADERS,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        validateStatus: (status: any) => validateStatus(status),
      })
      .then(
        (response: any) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
          return response?.data;
        },
        (err: any) => {
          console.log("err", err);
        }
      )
      .catch((response: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        return response.data;
      });
  },
};

export default axiosInstance;
export { api };
