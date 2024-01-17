import {
  getComponent,
  getComponentType,
  getComponentTypes,
  getComponents,
  getFarm,
  getFarmTurbines,
  getFarms,
  getGradeTypes,
  getInspection,
  getInspectionGrades,
  getInspections,
  getTurbine,
  getTurbineComponents,
  getTurbines,
} from "../resources/js/schema/endpoints";
import { farm, farms } from "./farms";
import { turbine, turbines } from "./turbines";
import {
  component,
  components,
  componentType,
  componentTypes,
} from "./components";
import { inspection, inspections } from "./inspections";
import { grades, gradeTypes } from "./grades";
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
  component: [
    {
      endpoint: getComponent,
      args: [{ id: 1 }] as const,
      response: component,
    },
    {
      endpoint: getTurbine,
      args: [{ id: 1 }] as const,
      response: turbine,
    },
    {
      endpoint: getComponentTypes,
      args: [] as const,
      response: componentTypes,
    },
  ],
  components: [
    {
      endpoint: getComponents,
      args: [] as const,
      response: components,
    },
    {
      endpoint: getTurbines,
      args: [] as const,
      response: turbines,
    },
    {
      endpoint: getComponentTypes,
      args: [] as const,
      response: componentTypes,
    },
  ],
  inspections: [
    {
      endpoint: getInspections,
      args: [] as const,
      response: inspections,
    },
    {
      endpoint: getTurbines,
      args: [] as const,
      response: turbines,
    },
    {
      endpoint: getInspectionGrades,
      args: [{ id: 1 }] as const,
      response: grades,
    },
  ],
  inspection: [
    {
      endpoint: getInspection,
      args: [{ id: 1 }] as const,
      response: inspection,
    },
    {
      endpoint: getTurbines,
      args: [] as const,
      response: turbines,
    },
    {
      endpoint: getTurbine,
      args: [{ id: 1 }] as const,
      response: turbines,
    },
    {
      endpoint: getInspectionGrades,
      args: [{ id: 1 }] as const,
      response: grades,
    },
    {
      endpoint: getGradeTypes,
      args: [] as const,
      response: gradeTypes,
    },
    {
      endpoint: getComponentTypes,
      args: [] as const,
      response: componentTypes,
    },
  ],
  componentType: [
    {
      endpoint: getComponentType,
      args: [{ id: 1 }] as const,
      response: componentType,
    },
  ],
  componentTypes: [
    {
      endpoint: getComponentTypes,
      args: [] as const,
      response: componentTypes,
    },
  ],
  gradeTypes: [
    {
      endpoint: getGradeTypes,
      args: [] as const,
      response: gradeTypes,
    },
  ],
};
