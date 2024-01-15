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
import Canvas3D from "../components/3D/Canvas3D";
import { useEffect, useState } from "react";
import { mapTurbineComponentsTableItems } from "../helpers/table-helpers";
import { CameraView } from "../enums/cameraView";

const Turbine: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  const [showComponent, setShowComponent] = useState(false);
  const [cameraView, setCameraView] = useState(CameraView.FULL);

  useEffect(() => {
    // TODO: Look for fix for Map container already initialised if both Map and 3D canvas attempt to render at same time
    // For now the hack below works but its less than ideal
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  if (typeof id === "undefined") {
    return <div>Loading...</div>;
  }

  const idNum = Number(id);
  const turbine = useSuspense(getTurbine, { id: idNum });
  const turbineComponents = useSuspense(getTurbineComponents, {
    id: idNum,
  });
  const componentTypes = useSuspense(getComponentTypes);
  const turbineComponentsTableItems = mapTurbineComponentsTableItems(
    turbineComponents.data,
    componentTypes.data,
  );
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

  const lookAtRotor = () => {
    setCameraView(CameraView.ROTOR);
  };
  const lookAtHub = () => {
    setCameraView(CameraView.HUB);
  };
  const lookAtBlade = () => {
    setCameraView(CameraView.BLADE);
  };

  return (
    <>
      <Helmet>
        <title>Turbine</title>
      </Helmet>
      <h1>Turbine</h1>
      {isNotNullOrUndefined(turbine) ? (
        <Table items={turbineTableItems} headings={["Name"]} />
      ) : null}
      <div className="flex">
        <div id="threejs-canvas-container" className="w-full m-4">
          <Canvas3D cameraView={cameraView} />
        </div>
        <div id="leaflet-map-container" className="w-full m-4">
          {showComponent && (
            <TurbineMap markers={markers} initialPosition={markerPosition} />
          )}
        </div>
      </div>
      <>
        <button
          className="mx-2 ml-4 text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-teeak-700 dark:hover:bg-teal-900 focus:outline-none dark:focus:ring-blue-800"
          onClick={lookAtRotor}>
          View Rotor
        </button>
        <button
          className="mx-2 text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-teeak-700 dark:hover:bg-teal-900 focus:outline-none dark:focus:ring-blue-800"
          onClick={lookAtHub}>
          View Hub
        </button>
        <button
          className="mx-2 text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-teeak-700 dark:hover:bg-teal-900 focus:outline-none dark:focus:ring-blue-800"
          onClick={lookAtBlade}>
          View Blade
        </button>
      </>

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
