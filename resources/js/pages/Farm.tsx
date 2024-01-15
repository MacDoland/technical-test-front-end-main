/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getFarm } from "../schema/endpoints";
import Table from "../components/Table";

const Farm: React.FC = () => {
  const { farmId } = useParams<{ farmId?: string }>();

  if (typeof farmId === "undefined") {
    return <div>Loading...</div>;
  }

  const farmIdNumber = Number(farmId);
  const farm = useSuspense(getFarm, { id: farmIdNumber });

  const farmTableItems = [
    {
      id: farm.data.id,
      display: <td>{farm?.data.name}</td>,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Farm</title>
      </Helmet>
      <h1>Farm</h1>
      {isNotNullOrUndefined(farm) ? (
        <Table
          items={farmTableItems}
          headings={["Name"]}
          showLinks
          childUrlName={`farms/${farmId}/turbines`}
          appendIdToLink={false}
        />
      ) : null}
    </>
  );
};

export default Farm;
