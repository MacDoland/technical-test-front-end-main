import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import isNotNullOrUndefined from "../helpers/helpers";
import useGetData from "../hooks/useGetData";
import List from "../components/List";
import type { ListItem, WindFarm, WindTurbine } from "../types/types";

const Farm: React.FC = () => {
  const { id: farmId } = useParams();

  const farm: WindFarm | null = useGetData(`/api/farms/${farmId}`);
  const turbines: WindTurbine[] | null = useGetData(
    `/api/farms/${farmId}/turbines`,
  );

  return (
    <>
      <Helmet>
        <title>Farm</title>
      </Helmet>
      <h1>Farm</h1>
      {isNotNullOrUndefined(farm) ? <div>{farm?.name}</div> : null}
      {isNotNullOrUndefined(turbines) ? (
        <>
          <h2>Turbines</h2>
          <List
            items={turbines as ListItem[]}
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
