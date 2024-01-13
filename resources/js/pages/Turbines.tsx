import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import List from "../components/List";
import type { ListItem } from "../types/types";
import isNotNullOrUndefined from "../helpers/helpers";
import { getTurbines } from "../schema/endpoints";

const Turbines: React.FC = () => {
  const turbines = useSuspense(getTurbines);

  return (
    <>
      <Helmet>
        <title>Turbines</title>
      </Helmet>
      <h1>Turbines</h1>
      {isNotNullOrUndefined(turbines) ? (
        <List
          items={turbines.data as ListItem[]}
          childUrlName="turbines"
          showLinks
        />
      ) : null}
    </>
  );
};

export default Turbines;
