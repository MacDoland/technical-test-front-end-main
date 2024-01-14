import type { ReactNode } from "react";

interface ListItem {
  id: number;
  name: string | undefined | ReactNode;
}

interface DataItem {
  id: number;
  name: string | undefined;
}

interface TableItem {
  id: number;
  display: string | undefined | ReactNode;
}

interface Resource {
  created_at: string;
  updated_at: string;
}

interface WindFarm extends ListItem, Resource {}
interface WindFarmResponse {
  data: WindFarm;
}

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

interface Inspection extends Resource {
  id: number;
  turbine_id: number;
  inspected_at: string;
}

interface WindFarmContextType {
  componentTypes: ComponentType[];
  gradeTypes: GradeType[];
}
export type {
  ComponentType,
  GradeType,
  ListItem,
  Component,
  Inspection,
  TurbineComponent,
  WindFarm,
  WindFarmResponse,
  WindTurbine,
  WindFarmContextType,
  TableItem,
  DataItem,
};
