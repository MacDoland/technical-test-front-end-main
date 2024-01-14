/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import type { LatLngExpression } from "leaflet";
import { isNotNullOrUndefined } from "../helpers/helpers";
import {
  getComponentTypes,
  getTurbine,
  getTurbineComponents,
} from "../schema/endpoints";
import Table from "../components/Table";
import TurbineMap from "../components/TurbineMap";
import type { MapMarker } from "../types/types";

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

  const turbineComponentsTableItems = turbineComponents.data.map(component => {
    const targetComponentType = componentTypes.data.find(
      type => type.id === component.component_type_id,
    );

    return {
      ...component,
      display:
        typeof targetComponentType !== "undefined" ? (
          <td>{targetComponentType.name}</td>
        ) : (
          "Unknown"
        ),
    };
  });

  const turbineTableItems = [
    {
      id: turbine.data.id,
      display: <td>{turbine?.data.name}</td>,
    },
  ];

  const markerPosition: LatLngExpression = [
    Number(turbine.data.lat),
    Number(turbine.data.lng),
  ];
  const markers: MapMarker[] = [
    {
      id: turbine.data.id,
      position: markerPosition,
      title: turbine.data.name,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Turbine</title>
      </Helmet>
      <h1>Turbine</h1>
      {isNotNullOrUndefined(turbine) ? (
        <Table items={turbineTableItems} headings={["Name"]} />
      ) : null}
      <TurbineMap markers={markers} initialPosition={markerPosition} />

      {isNotNullOrUndefined(turbineComponentsTableItems) ? (
        <>
          <h2>Components</h2>
          <Table items={turbineComponentsTableItems} headings={["Name"]} />
        </>
      ) : null}
    </>
  );
};

export default Turbine;
