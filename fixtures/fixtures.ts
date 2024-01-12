import { FarmResource, getFarms } from "../resources/js/schema/schema";
import { farm } from "./farm";
import { farms } from "./farms";
export default {
  full: [
    {
      endpoint: FarmResource.getList,
      args: [] as const,
      response: farms.data,
    },
    {
      endpoint: getFarms,
      args: [] as const,
      response: farms,
    },
    {
      endpoint: FarmResource.get,
      args: [{ id: 1 }] as const,
      response: farm,
    },
  ],
  empty: [
    {
      endpoint: FarmResource.getList,
      args: [{ maxResults: 10 }] as const,
      response: [],
    },
  ],
  error: [
    {
      endpoint: FarmResource.getList,
      args: [{ maxResults: 10 }] as const,
      response: { message: "Bad request", status: 400, name: "Not Found" },
      error: true,
    },
  ],
  loading: [],
};
