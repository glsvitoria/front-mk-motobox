import { MotoServiceGetRequest, MotoServiceGetResponse } from "./types";
import { api } from "../api";

export const MotoService = {
  get: async ({ init, limit, search = "" }: MotoServiceGetRequest) => {
    const filtersSearch = search
      ? `filters[$or][0][modelo][$containsi]=${search}&filters[$or][1][marca][$containsi]=${search}`
      : "";

    return await api
      .get<MotoServiceGetResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/motos?populate=*&pagination[page]=${init}&pagination[pageSize]=${limit}&${filtersSearch}`,
      )
      .then((response) => ({
        motos: response.data.data,
        pagination: {
          ...response.data.meta.pagination,
        },
      }))
      .catch(() => {
        // eslint-disable-next-line no-throw-literal
        throw {
          message: "Não foi possível buscar as motos",
        };
      });
  },
};
