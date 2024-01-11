import { Helmet } from "react-helmet-async";
import useGetData from "../hooks/useGetData";
import List from "../components/List";

import type { ListItem, WindTurbine } from "../types/types";
import isNotNullOrUndefined from "../helpers/helpers";

const Farm: React.FC = () => {
  const turbines: WindTurbine[] | null = useGetData("/api/turbines");

  return (
    <>
      <Helmet>
        <title>Turbines</title>
      </Helmet>
      <h1>Turbines</h1>
      {isNotNullOrUndefined(turbines) ? (
        <List
          items={turbines as ListItem[]}
          childUrlName="turbines"
          showLinks
        />
      ) : null}
    </>
  );
};

export default Farm;
