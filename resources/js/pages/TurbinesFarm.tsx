import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import List from "../components/List";
import type { ListItem } from "../types/types";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getFarmTurbines, getTurbines } from "../schema/endpoints";
import { useParams } from "react-router-dom";

const Turbines: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (typeof id === "undefined") {
    return <div>Loading...</div>;
  }

  const idAsNumber = Number(id);

  const turbines = useSuspense(getFarmTurbines, { id: idAsNumber });

  return (
    <>
      <Helmet>
        <title>Turbines</title>
      </Helmet>
      <h1>Turbines</h1>
      {isNotNullOrUndefined(turbines) ? (
        <List
          items={turbines?.data as ListItem[]}
          childUrlName="turbines"
          showLinks
        />
      ) : null}
    </>
  );
};

export default Turbines;
