import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import List from "../components/List";
import type { ListItem, WindFarm } from "../types/types";
import isNotNullOrUndefined from "../helpers/helpers";
import { getFarms } from "../schema/schema";
import { useSuspense } from "@rest-hooks/react";

const Farms: React.FC = () => {
  const farms = useSuspense(getFarms);

  return (
    <>
      <Helmet>
        <title>Farms</title>
      </Helmet>
      <h1>Farms</h1>
      {isNotNullOrUndefined(farms) ? (
        <List items={farms.data as ListItem[]} childUrlName="farms" showLinks />
      ) : null}
    </>
  );
};

export default Farms;
