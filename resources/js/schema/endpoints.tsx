import { RestEndpoint, createResource } from "@rest-hooks/rest";
import {
  ComponentTypesData,
  FarmData,
  FarmsData,
  TurbineComponentsData,
  TurbineData,
  TurbinesData,
} from "./entities";

/* Farms */
export const getFarm = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/farms/:id",
  schema: FarmData,
});

export const getFarms = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/farms",
  schema: FarmsData,
});

export const getFarmTurbines = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/farms/:id/turbines",
  schema: TurbinesData,
  dataExpiryLength: 50,
  invalidIfStale: true,
});

/* Turbines */

export const getTurbine = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/turbines/:id",
  schema: TurbineData,
  dataExpiryLength: 50,
  invalidIfStale: true,
});

export const getTurbines = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/turbines",
  schema: TurbinesData,
  dataExpiryLength: 50,
  invalidIfStale: true,
});

export const getTurbineComponents = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/turbines/:id/components",
  schema: TurbineComponentsData,
});

export const getComponentTypes = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/component-types",
  schema: ComponentTypesData,
});

export const FarmTurbinesResource = createResource({
  urlPrefix: "http://localhost/api",
  path: "/farms/:id/turbines",
  schema: TurbinesData,
});
