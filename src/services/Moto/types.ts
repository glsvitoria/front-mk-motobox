import { Moto } from "@/types";

export interface MotoServiceGetRequest {
  init: string;
  limit: string;
  search?: string;
}

export interface MotoServiceGetResponse {
  data: Moto[];
  meta: {
    pagination: {
      page: 1;
      pageSize: 25;
      pageCount: 1;
      total: 1;
    };
  };
}
