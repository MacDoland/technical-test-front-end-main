import type {
  ComponentType,
  Grade,
  GradeType,
  Inspection,
  Turbine,
  TurbineComponent,
} from "../schema/entities";
import type { TableItem, DataItem } from "../types/types";
import { isNotNullOrUndefined } from "./helpers";

export const convertDataItemForDisplay = (item: DataItem): TableItem => {
  return {
    id: item.id,
    display: <td>{item.name}</td>,
  };
};

export const convertDataItemsForDisplay = (items: DataItem[]): TableItem[] => {
  return items.map(item => {
    return {
      id: item.id,
      display: <td>{item.name}</td>,
    };
  });
};

export const mapComponentTurbinesToTableItem = (
  componentsList: TurbineComponent[],
  componentTypes: ComponentType[],
  turbines: Turbine[],
): TableItem[] => {
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
      display: (
        <>
          <td className="p-2">{componentName}</td>
          <td className="p-2">{turbineName}</td>
        </>
      ),
    };
  });
};

export const mapGradesToTableItems: (
  gradeList: Grade[],
  gradeTypes: GradeType[],
) => TableItem[] = (gradeList: Grade[], gradeTypes: GradeType[]) => {
  return gradeList.map(item => {
    const gradeType = gradeTypes.find(g => g.id === item.grade_type_id);

    const grade = isNotNullOrUndefined(gradeType) ? gradeType?.name : "";

    return {
      id: item.id,
      display: <td>{grade}</td>,
    };
  });
};

export const mapInspectedTurbinesToTableItems = (
  inspections: Inspection[],
  turbines: Turbine[],
): TableItem[] => {
  return inspections.map(inspection => {
    const turbine = turbines.find(t => t.id === inspection.turbine_id);
    const display = isNotNullOrUndefined(turbine) ? (
      <>
        <td>{inspection.inspected_at}</td>
        <td>{turbine?.name}</td>
      </>
    ) : null;
    return {
      id: inspection.id,
      display,
    };
  });
};

export const mapGradedComponentsToTableItems = (
  gradesList: Grade[],
  componentTypes: ComponentType[],
  gradeTypes: GradeType[],
): TableItem[] => {
  return gradesList.map(item => {
    const componentType = componentTypes.find(c => c.id === item.component_id);

    const gradeType = gradeTypes.find(g => g.id === item.grade_type_id);

    const componentName = isNotNullOrUndefined(componentType)
      ? componentType?.name
      : "";
    const gradeName = isNotNullOrUndefined(gradeType) ? gradeType?.name : "";

    return {
      id: item.id,
      display: (
        <>
          <td>{componentName}</td>
          <td>{gradeName}</td>
        </>
      ),
    };
  });
};

export const mapGradeType = (
  grade: Grade,
  gradeTypes: GradeType[],
): DataItem => {
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
): DataItem => {
  const componentType = componentTypes.find(
    c => c.id === component.component_type_id,
  );
  const name = isNotNullOrUndefined(componentType) ? componentType?.name : "";

  return {
    id: component.id,
    name,
  };
};

export const mapTurbineComponentsTableItems = (
  components: TurbineComponent[],
  componentTypes: ComponentType[],
): TableItem[] => {
  return components.map(component => {
    const targetComponentType = componentTypes.find(
      type => type.id === component.component_type_id,
    );

    return {
      id: component.id,
      display:
        typeof targetComponentType !== "undefined" ? (
          <td>{targetComponentType.name}</td>
        ) : (
          "Unknown"
        ),
    };
  });
};
