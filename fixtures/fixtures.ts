import {
  getFarm,
  getFarmTurbines,
  getFarms,
} from "../resources/js/schema/schema";
import { farm } from "./farm";
import { farms } from "./farms";
import { turbines } from "./turbines";
export default {
  farm: [
    {
      endpoint: getFarm,
      args: [{ id: 1 }] as const,
      response: farm,
    },
    {
      endpoint: getFarmTurbines,
      args: [{ id: 1 }] as const,
      response: turbines,
    },
  ],
  farms: [
    {
      endpoint: getFarms,
      args: [] as const,
      response: farms,
    },
  ],
};
