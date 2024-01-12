import { createResource, Entity, RestEndpoint } from "@rest-hooks/rest";

/* Entities */

export class Farm extends Entity {
  id = 0;
  name = "";
  created_at = "";
  updated_at = false;

  pk() {
    return `${this.id}`;
  }
  static key = "Farm";

  static process(value: any, parent: any, key: any) {
    return value;
  }
}

export class Turbine extends Entity {
  id = 0;
  name = "";
  lat = "";
  lng = "";
  farm_id = 0;
  created_at = "";
  updated_at = "";

  pk() {
    return `${this.id}`;
  }

  static key = "Turbine";

  static process(value: any, parent: any, key: any) {
    return value.data;
  }
}

export class FarmData extends Entity {
  data: Farm = Farm.fromJS();
  pk() {
    return `FarmData`;
  }
}

export class FarmsData extends Entity {
  data: Farm[] = [];

  pk() {
    return `FarmsData`;
  }
}

export class TurbineData extends Entity {
  id = 0;
  data: Turbine[] = [];

  pk() {
    return `TD`;
  }

  static process(value: any, parent: any, key: any) {
    return value;
  }
}

/* Schema */

FarmData.schema = {
  data: Farm,
};

Farm.schema = {
  id: Number,
  name: String,
  created_at: String,
  updated_at: String,
};

Turbine.schema = {
  id: Number,
  name: String,
  lat: String,
  ln: String,
  farm_id: Number,
  created_at: String,
  updated_at: String,
};

/* Resources */

export const getFarm = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/farms/:id",
  schema: FarmData,
});

export const getFarmTurbines = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/farms/:id/turbines",
  schema: TurbineData,
});

export const getFarms = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/farms",
  schema: FarmsData,
});

export const FarmResource = createResource({
  urlPrefix: "http://localhost/api",
  path: "/farms/:id",
  schema: Farm,
});

export const FarmTurbinesResource = createResource({
  urlPrefix: "http://localhost/api",
  path: "/farms/:id/turbines",
  schema: TurbineData,
});
