import {
  getComponentTypes,
  getFarm,
  getFarmTurbines,
  getFarms,
  getTurbine,
  getTurbineComponents,
  getTurbines,
} from "../resources/js/schema/schema";
import { farm, farms } from "./farms";
import { turbine, turbines } from "./turbines";
import { components, componentTypes } from "./components";
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
  turbine: [
    {
      endpoint: getTurbine,
      args: [{ id: 1 }] as const,
      response: turbine,
    },
    {
      endpoint: getTurbineComponents,
      args: [{ id: 1 }] as const,
      response: components,
    },
    {
      endpoint: getComponentTypes,
      args: [] as const,
      response: componentTypes,
    },
  ],
  turbines: [
    {
      endpoint: getTurbines,
      args: [] as const,
      response: turbines,
    },
  ],
};
