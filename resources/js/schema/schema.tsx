/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
// TODO: Consider refactoring into seperate files
// TODO: Consider refactoring some of these repeated classes into generics if possible

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

  static process(value: TurbineData): Turbine {
    return value.data;
  }
}

export class TurbineComponent extends Entity {
  id = 0;
  turbine_id = 1;
  component_type_id = 1;
  created_at = "";
  updated_at = "";
  name = "component name";

  pk(): string {
    return `${this.id}`;
  }

  static key = "Turbine";

  static process(value: TurbineComponentData): TurbineComponent {
    return value.data;
  }
}

export class ComponentType extends Entity {
  id = 0;
  name = "";
  created_at = "";
  updated_at = false;

  pk(): string {
    return `${this.id}`;
  }

  static key = "ComponentType";

  static process(value: ComponentTypeData): ComponentType {
    return value.data;
  }
}

export class FarmData extends Entity {
  data: Farm = Farm.fromJS();

  pk(): string {
    return "FarmData";
  }
}

export class FarmsData extends Entity {
  data: Farm[] = [];

  pk(): string {
    return "FarmsData";
  }
}

export class TurbineData extends Entity {
  data: Turbine = Turbine.fromJS();

  pk(): string {
    return "TurbineData";
  }
}

export class TurbinesData extends Entity {
  data: Turbine[] = [];

  pk(): string {
    return "TurbinesData";
  }
}

export class TurbineComponentData extends Entity {
  data: TurbineComponent = TurbineComponent.fromJS();

  pk(): string {
    return "ComponentsData";
  }
}

export class TurbineComponentsData extends Entity {
  data: TurbineComponent[] = [];

  pk(): string {
    return "ComponentsData";
  }
}

export class ComponentTypeData extends Entity {
  data: ComponentType = ComponentType.fromJS();

  pk(): string {
    return "ComponentsData";
  }
}

export class ComponentTypesData extends Entity {
  data: ComponentType[] = [];

  pk(): string {
    return "ComponentsData";
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

TurbineComponent.schema = {
  id: Number,
  name: String,
  component_type_id: Number,
  turbine_id: Number,
  created_at: String,
  updated_at: String,
};

/* Resources */

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

export const getComponentTypes = new RestEndpoint({
  urlPrefix: "http://localhost/api",
  path: "/component-types",
  schema: ComponentTypesData,
});

export const FarmTurbinesResource = createResource({
  urlPrefix: "http://localhost/api",
  path: "/farms/:id/turbines",
  schema: TurbinesData,
});
