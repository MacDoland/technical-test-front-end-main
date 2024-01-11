import { useState } from "react";
import { useParams } from "react-router-dom";
import isNotNullOrUndefined from "../helpers/helpers";
import { Helmet } from "react-helmet";
import useGetData from "../hooks/useGetData";

// TODO: extract types to dts file
interface WindFarm {
  id: number;
  name: string;
  created_at: string;
  update_at: string;
}

const Farm: React.FC = () => {
  const { id } = useParams();
  const [farm, setFarm] = useState<WindFarm>();

  useGetData(`/api/farms/${id}`, setFarm);

  return (
    <>
      <Helmet>
        <title>Farm</title>
      </Helmet>
      <h1>Farm</h1>
      {isNotNullOrUndefined(farm) ? <div>{farm?.name}</div> : null}
    </>
  );
};

export default Farm;
