import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import isNotNullOrUndefined from "../helpers/helpers";
import List from "../components/List";

import { getFarm, getFarmTurbines } from "../schema/schema";
import { useSuspense } from "@rest-hooks/react";

const Farm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (typeof id === "undefined") {
    return <div>Loading...</div>;
  }

  const idNum = parseInt(id);
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
