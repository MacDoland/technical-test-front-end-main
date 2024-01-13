/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import List, { type ListItem } from "../components/List";
import {
  getComponentTypes,
  getTurbine,
  getTurbineComponents,
} from "../schema/endpoints";

const Turbine: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (typeof id === "undefined") {
    return <div>Loading...</div>;
  }

  const idNum = Number(id);
  const turbine = useSuspense(getTurbine, { id: idNum });
  const turbineComponents = useSuspense(getTurbineComponents, {
    id: idNum,
  });
  const componentTypes = useSuspense(getComponentTypes);

  const turbineComponentsViewModel = turbineComponents.data.map(component => {
    const targetComponentType = componentTypes.data.find(
      type => type.id === component.component_type_id,
    );

    return {
      ...component,
      name:
        typeof targetComponentType !== "undefined"
          ? targetComponentType.name
          : "Unknown",
    };
  });

  return (
    <>
      <Helmet>
        <title>Turbine</title>
      </Helmet>
      <h1>Turbine</h1>
      {isNotNullOrUndefined(turbine) ? <div>{turbine?.data.name}</div> : null}
      {isNotNullOrUndefined(turbineComponentsViewModel) ? (
        <>
          <h2>Components</h2>
          <List
            items={turbineComponentsViewModel as ListItem[]}
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
