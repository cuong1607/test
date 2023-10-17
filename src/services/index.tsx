import axios from "axios";

export interface IQuery {
  page: number;
  size?: number;
}
export const Services = {
  get: async (params: IQuery) => {
    const url = `https://random-data-api.com/api/users/random_user`;
    return await axios.get(url, { params });
  },
};
