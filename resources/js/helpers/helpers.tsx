import type {
  ComponentType,
  Grade,
  Inspection,
  Turbine,
  TurbineComponent,
} from "../schema/entities";
import type { GradeType, ListItem } from "../types/types";

export const isNotNullOrUndefined = (value: any): boolean =>
  value !== null && typeof value !== "undefined";

export const mapInspections: (inspectionList: Inspection[]) => ListItem[] = (
  inspectionList: Inspection[],
) => {
  return inspectionList.map(item => {
    return {
      id: item.id,
      name: item.inspected_at,
    };
  });
};

export const mapInspectedTurbines = (
  inspections: Inspection[],
  turbines: Turbine[],
): ListItem[] => {
  return inspections.map(inspection => {
    const turbine = turbines.find(t => t.id === inspection.turbine_id);
    const name = isNotNullOrUndefined(turbine)
      ? `Inspection: ${inspection.inspected_at} on turbine: ${turbine?.name} `
      : "";
    return {
      id: inspection.id,
      name,
    };
  });
};

export const mapGradeType = (
  grade: Grade,
  gradeTypes: GradeType[],
): ListItem => {
  const gradeType = gradeTypes.find(g => g.id === grade.grade_type_id);
  const name = isNotNullOrUndefined(gradeType) ? gradeType?.name : "";

  return {
    id: grade.id,
    name,
  };
};

export const mapComponentType = (
  component: TurbineComponent,
  componentTypes: ComponentType[],
): ListItem => {
  const componentType = componentTypes.find(
    c => c.id === component.component_type_id,
  );
  const name = isNotNullOrUndefined(componentType) ? componentType?.name : "";

  return {
    id: component.id,
    name,
  };
};

export const mapGradeTypes: (
  gradeList: Grade[],
  gradeTypes: GradeType[],
) => ListItem[] = (gradeList: Grade[], gradeTypes: GradeType[]) => {
  return gradeList.map(item => {
    const gradeType = gradeTypes.find(g => g.id === item.grade_type_id);

    const name = isNotNullOrUndefined(gradeType) ? gradeType?.name : "";

    return {
      id: item.id,
      name,
    };
  });
};

export const mapComponentTypes: (
  componentList: TurbineComponent[],
  componentTypes: ComponentType[],
) => ListItem[] = (
  componentList: TurbineComponent[],
  componentTypes: ComponentType[],
) => {
  return componentList.map(item => {
    const componentType = componentTypes.find(
      g => g.id === item.component_type_id,
    );

    const name = isNotNullOrUndefined(componentType) ? componentType?.name : "";

    return {
      id: item.id,
      name,
    };
  });
};

export const mapGradedComponents = (
  gradesList: Grade[],
  componentTypes: ComponentType[],
  gradeTypes: GradeType[],
): ListItem[] => {
  return gradesList.map(item => {
    const componentType = componentTypes.find(c => c.id === item.component_id);

    const gradeType = gradeTypes.find(g => g.id === item.grade_type_id);

    const componentName = isNotNullOrUndefined(componentType)
      ? componentType?.name
      : "";
    const gradeName = isNotNullOrUndefined(gradeType) ? gradeType?.name : "";

    return {
      id: item.id,
      name: (
        <>
          <span>{`Component: ${componentName}`}</span>
          <span>{`Grade: ${gradeName}`}</span>
        </>
      ),
    };
  });
};

export const mapComponentTurbines = (
  componentsList: TurbineComponent[],
  componentTypes: ComponentType[],
  turbines: Turbine[],
): ListItem[] => {
  return componentsList.map(item => {
    const componentType = componentTypes.find(
      c => c.id === item.component_type_id,
    );
    const turbine = turbines.find(t => t.id === item.turbine_id);

    const componentName = isNotNullOrUndefined(componentType)
      ? componentType?.name
      : "";

    const turbineName = isNotNullOrUndefined(turbine) ? turbine?.name : "";

    return {
      id: item.id,
      name: (
        <>
          <td className="p-2">{componentName}</td>
          <td className="p-2">{turbineName}</td>
        </>
      ),
    };
  });
};
