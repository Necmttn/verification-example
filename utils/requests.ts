import axios from "axios";

export const post = async <T, R = any>(url: string, data: T) => {
  return axios.post<R>(`${url}`, data, {
    validateStatus: (status) => [400, 401, 200].includes(status),
  });
};
