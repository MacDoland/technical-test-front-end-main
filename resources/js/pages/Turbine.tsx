/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule
import { useEffect, useState } from "react";
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
import { mapTurbineComponentsTableItems } from "../helpers/table-helpers";
import CameraView from "../enums/cameraView";
import WindTurbine from "../components/3D/WindTurbine";
import ActionButton from "../components/ActionButton";

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

    return () => {
      clearTimeout(timeout);
    };
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

  const lookAtTurbine = (): void => {
    setCameraView(CameraView.FULL);
  };
  const lookAtRotor = (): void => {
    setCameraView(CameraView.ROTOR);
  };
  const lookAtHub = (): void => {
    setCameraView(CameraView.HUB);
  };
  const lookAtBlade = (): void => {
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
      <div className="flex gap-4">
        <div id="threejs-canvas-container" className="w-full my-4">
          <Canvas3D>
            <WindTurbine cameraView={cameraView} />
          </Canvas3D>
        </div>
        <div id="leaflet-map-container" className="w-full my-4">
          {showComponent && (
            <TurbineMap markers={markers} initialPosition={markerPosition} />
          )}
        </div>
      </div>
      <div className="flex gap-4">
        <ActionButton
          className={
            cameraView === CameraView.FULL
              ? "bg-yellow-500 hover:bg-yellow-900"
              : ""
          }
          onClick={lookAtTurbine}>
          View Turbine
        </ActionButton>
        <ActionButton
          className={
            cameraView === CameraView.ROTOR
              ? "bg-yellow-500 hover:bg-yellow-900"
              : ""
          }
          onClick={lookAtRotor}>
          View Rotor
        </ActionButton>
        <ActionButton
          className={
            cameraView === CameraView.HUB
              ? "bg-yellow-500 hover:bg-yellow-900"
              : ""
          }
          onClick={lookAtHub}>
          View Hub
        </ActionButton>
        <ActionButton
          className={
            cameraView === CameraView.BLADE
              ? "bg-yellow-500 hover:bg-yellow-900"
              : ""
          }
          onClick={lookAtBlade}>
          View Blade
        </ActionButton>
      </div>

      {isNotNullOrUndefined(turbineComponentsTableItems) ? (
        <>
          <h2 className="mt-12">Components</h2>
          <Table items={turbineComponentsTableItems} headings={["Name"]} />
        </>
      ) : null}
    </>
  );
};

export default Turbine;
