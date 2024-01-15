/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getFarmTurbine } from "../schema/endpoints";
import Table from "../components/Table";

const Farm: React.FC = () => {
  const { farmId } = useParams<{ farmId?: string }>();
  const { turbineId } = useParams<{ turbineId?: string }>();

  if (typeof farmId === "undefined") {
    return <div>Loading...</div>;
  }

  const farmIdNumber = Number(farmId);
  const turbineIdNumber = Number(turbineId);
  const turbine = useSuspense(getFarmTurbine, {
    id: farmIdNumber,
    turbineId: turbineIdNumber,
  });

  const turbineTableItem = [
    {
      id: turbine.data.id,
      display: <td>{turbine?.data.name}</td>,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Farm Turbine</title>
      </Helmet>
      <h1>Turbine</h1>
      {isNotNullOrUndefined(turbineTableItem) ? (
        <Table items={turbineTableItem} headings={["Name"]} />
      ) : null}
    </>
  );
};

export default Farm;
