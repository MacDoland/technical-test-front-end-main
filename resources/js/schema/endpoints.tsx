import { RestEndpoint, createResource } from "@rest-hooks/rest";
import {
  ComponentTypeData,
  ComponentTypesData,
  FarmData,
  FarmsData,
  GradeData,
  GradeTypeData,
  GradeTypesData,
  GradesData,
  InspectionData,
  InspectionsData,
  TurbineComponentData,
  TurbineComponentsData,
  TurbineData,
  TurbinesData,
} from "./entities";

// TODO: Replace localhost with env variable

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

export const getComponent = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/components/:id",
  schema: TurbineComponentData,
});

export const getComponents = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/components",
  schema: TurbineComponentsData,
});

export const getComponentType = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/component-types/:id",
  schema: ComponentTypeData,
});

export const getComponentTypes = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/component-types",
  schema: ComponentTypesData,
});

export const getInspection = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/inspections/:id",
  schema: InspectionData,
});

export const getInspections = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/inspections",
  schema: InspectionsData,
});

export const getInspectionGrades = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/inspections/:id/grades",
  schema: GradesData,
});

export const getGrade = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/grades/:id",
  schema: GradeData,
});

export const getGrades = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/grades",
  schema: GradesData,
});

export const getGradeType = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/grade-types/:id",
  schema: GradeTypeData,
});

export const getGradeTypes = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/grade-types",
  schema: GradeTypesData,
});
