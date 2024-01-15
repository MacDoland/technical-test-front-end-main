/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { useParams } from "react-router-dom";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getFarmTurbines } from "../schema/endpoints";
import { convertDataItemsForDisplay } from "../helpers/table-helpers";
import Table from "../components/Table";

const FarmTurbines: React.FC = () => {
  const { farmId } = useParams<{ farmId?: string }>();

  if (typeof farmId === "undefined") {
    return <div>Loading...</div>;
  }

  const farmIdNumber = Number(farmId);

  const turbines = useSuspense(getFarmTurbines, { id: farmIdNumber });
  const turbinesTableItems = convertDataItemsForDisplay(turbines.data);

  return (
    <>
      <Helmet>
        <title>Turbines</title>
      </Helmet>
      <h1>Turbines</h1>
      {isNotNullOrUndefined(turbines) ? (
        <Table
          items={turbinesTableItems}
          headings={["Name"]}
          childUrlName={`farms/${farmId}/turbines`}
          showLinks
        />
      ) : null}
    </>
  );
};

export default FarmTurbines;
