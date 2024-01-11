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

export type { ListItem, WindFarm, WindTurbine };
