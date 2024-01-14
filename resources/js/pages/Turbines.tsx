import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import L from "leaflet";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getTurbines } from "../schema/endpoints";
import { convertDataItemsForDisplay } from "../helpers/table-helpers";
import Table from "../components/Table";
import TurbineMap from "../components/TurbineMap";
import type { MapMarker } from "../types/types";

const Turbines: React.FC = () => {
  const turbines = useSuspense(getTurbines);
  const turbinesTableItems = convertDataItemsForDisplay(turbines.data);

  const bounds = L.latLngBounds([]);

  const markers: MapMarker[] = turbines.data.map(item => {
    bounds.extend([Number(item.lat), Number(item.lng)]);
    return {
      id: item.id,
      position: [Number(item.lat), Number(item.lng)],
      title: item.name,
    };
  });

  return (
    <>
      <Helmet>
        <title>Turbines</title>
      </Helmet>
      <h1>Turbines</h1>
      <TurbineMap
        markers={markers}
        initialPosition={bounds.getCenter()}
        zoom={3}
      />
      {isNotNullOrUndefined(turbines) ? (
        <Table
          items={turbinesTableItems}
          childUrlName="turbines"
          headings={["Name"]}
          showLinks
        />
      ) : null}
    </>
  );
};

export default Turbines;
