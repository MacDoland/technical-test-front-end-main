interface ListItem {
  id: number;
  name: string;
}

interface WindFarm extends ListItem {
  created_at: string;
  update_at: string;
}

interface WindTurbine extends ListItem {
  farm_id: number;
  lat: string;
  lng: string;
  created_at: string;
  update_at: string;
}

interface TurbineComponent {
  id: number;
  turbine_id: number;
  component_type_id: number;
  created_at: string;
  updated_at: string;
}

export type { ListItem, TurbineComponent, WindFarm, WindTurbine };
