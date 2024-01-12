interface ListItem {
  id: number;
  name: string | undefined;
}

interface Resource {
  created_at: string;
  updated_at: string;
}

interface WindFarm extends ListItem, Resource {}

interface WindTurbine extends ListItem, Resource {
  farm_id: number;
  lat: string;
  lng: string;
}

interface Component extends Resource {
  id: number;
  turbine_id: number;
  component_type_id: number;
}

interface ComponentType extends ListItem, Resource {}

interface GradeType extends ListItem, Resource {}
interface TurbineComponent extends ListItem {}

interface WindFarmContextType {
  componentTypes: ComponentType[];
  gradeTypes: GradeType[];
}
export type {
  ComponentType,
  GradeType,
  ListItem,
  Component,
  TurbineComponent,
  WindFarm,
  WindTurbine,
  WindFarmContextType,
};
