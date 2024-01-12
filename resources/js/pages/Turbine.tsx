import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import isNotNullOrUndefined from "../helpers/helpers";
import useGetData from "../hooks/useGetData";
import type {
  ListItem,
  Component,
  TurbineComponent,
  WindTurbine,
} from "../types/types";
import { WindFarmContext } from "../providers/WindFarmProvider";
import List from "../components/List";

const Turbine: React.FC = () => {
  const { id: turbineId } = useParams();
  const context = useContext(WindFarmContext);
  const [turbineComponents, setTurbineComponents] =
    useState<TurbineComponent[]>();

  const turbine = useGetData<WindTurbine>(`/api/turbines/${turbineId}`);
  const components = useGetData<Component[]>(
    `/api/turbines/${turbineId}/components`,
    new Array<Component>(),
  );

  const mapComponents: (componentList: Component[]) => TurbineComponent[] = (
    componentList: Component[],
  ) => {
    return componentList.map(item => {
      const matchingComponentType = context.componentTypes.find(
        componentType => componentType.id === item.id,
      );

      return {
        id: item.id,
        name: isNotNullOrUndefined(matchingComponentType)
          ? matchingComponentType?.name
          : undefined,
      };
    });
  };

  const createComponentsDisplay = useCallback(mapComponents, [
    context.componentTypes,
  ]);

  useEffect(() => {
    const displayComponents = isNotNullOrUndefined(components)
      ? createComponentsDisplay(components as Component[])
      : new Array<TurbineComponent>();

    setTurbineComponents(displayComponents);
  }, [components, context.componentTypes, createComponentsDisplay]);

  return (
    <>
      <Helmet>
        <title>Turbine</title>
      </Helmet>
      <h1>Turbine</h1>
      {isNotNullOrUndefined(turbine) ? <div>{turbine?.name}</div> : null}
      {isNotNullOrUndefined(components) ? (
        <>
          <h2>Components</h2>
          <List
            items={turbineComponents as ListItem[]}
            showLinks={false}
            childUrlName="turbines"
            keyPrefix="turbine-"
          />
        </>
      ) : null}
    </>
  );
};

export default Turbine;
