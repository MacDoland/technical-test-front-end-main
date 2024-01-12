/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import isNotNullOrUndefined from "../helpers/helpers";
import List from "../components/List";
import { getFarm, getFarmTurbines } from "../schema/schema";

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

  return (
    <>
      <Helmet>
        <title>Farm</title>
      </Helmet>
      <h1>Farm</h1>
      {isNotNullOrUndefined(farm) ? <div>{farm?.data.name}</div> : null}
      {isNotNullOrUndefined(farmTurbines) ? (
        <>
          <h2>Turbines</h2>
          <List
            items={farmTurbines.data}
            showLinks={false}
            childUrlName="turbines"
            keyPrefix="turbine-"
          />
        </>
      ) : null}
    </>
  );
};

export default Farm;
