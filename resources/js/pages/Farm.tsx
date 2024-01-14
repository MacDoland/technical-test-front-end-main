/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getFarm, getFarmTurbines } from "../schema/endpoints";
import { convertDataItemsForDisplay } from "../helpers/table-helpers";
import Table from "../components/Table";

const Farm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (typeof id === "undefined") {
    return <div>Loading...</div>;
  }

  const idNum = Number(id);
  const farm = useSuspense(getFarm, { id: idNum });
  const farmTurbines = useSuspense(getFarmTurbines, {
    id: idNum,
  });

  const farmTableItems = [
    {
      id: farm.data.id,
      display: <td>{farm?.data.name}</td>,
    },
  ];
  const turbinesTableItems = convertDataItemsForDisplay(farmTurbines.data);

  return (
    <>
      <Helmet>
        <title>Farm</title>
      </Helmet>
      <h1>Farm</h1>
      {isNotNullOrUndefined(farm) ? (
        <Table items={farmTableItems} headings={["Name"]} />
      ) : null}

      {isNotNullOrUndefined(farmTurbines) ? (
        <Table
          items={turbinesTableItems}
          showLinks
          childUrlName="turbines"
          keyPrefix="turbine-"
          headings={["Turbines"]}
        />
      ) : null}
    </>
  );
};

export default Farm;
