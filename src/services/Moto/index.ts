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
          page: response.data.meta.pagination.page,
          total: response.data.meta.pagination.total,
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
