/* eslint-disable max-classes-per-file */
// TODO: Consider refactoring into seperate files

import { createResource, Entity, RestEndpoint } from "@rest-hooks/rest";

/* Entities */

export class Farm extends Entity {
  id = 0;
  name = "";
  created_at = "";
  updated_at = false;

  pk(): string {
    return `${this.id}`;
  }

  static key = "Farm";

  static process(value: FarmData): Farm {
    return value.data;
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

  pk(): string {
    return `${this.id}`;
  }

  static key = "Turbine";

  static process(value: TurbineData): Turbine[] {
    return value.data;
  }
}

export class FarmData extends Entity {
  id = "FarmData";
  data: Farm = Farm.fromJS();

  pk(): string {
    return this.id;
  }
}

export class FarmsData extends Entity {
  id = "FarmsData";
  data: Farm[] = [];

  pk(): string {
    return this.id;
  }
}

export class TurbineData extends Entity {
  id = "TurbineData";
  data: Turbine[] = [];

  pk(): string {
    return this.id;
  }
}

/* Schema */

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

export const getFarmTurbines = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/farms/:id/turbines",
  schema: TurbineData,
});

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

export const FarmTurbinesResource = createResource({
  urlPrefix: "http://localhost/api",
  path: "/farms/:id/turbines",
  schema: TurbineData,
});
