import { Helmet } from "react-helmet-async";
import useGetData from "../hooks/useGetData";
import List from "../components/List";
import type { ListItem, WindFarm } from "../types/types";
import isNotNullOrUndefined from "../helpers/helpers";

const Farm: React.FC = () => {
  const farms: WindFarm[] | null = useGetData("/api/farms");

  return (
    <>
      <Helmet>
        <title>Farms</title>
      </Helmet>
      <h1>Farms</h1>
      {isNotNullOrUndefined(farms) ? (
        <List items={farms as ListItem[]} childUrlName="farms" showLinks />
      ) : null}
    </>
  );
};

export default Farm;
