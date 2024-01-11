import axios, { type AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import isNotNullOrUndefined from "../helpers/helpers";
import { Helmet } from "react-helmet";

// TODO: extract types to dts file
interface WindFarm {
  id: number;
  name: string;
  created_at: string;
  update_at: string;
}

interface WindFarmResponse {
  data: WindFarm;
}

const Farm: React.FC = () => {
  const { id } = useParams();
  const [farm, setFarm] = useState<WindFarm>();

  useEffect(() => {
    axios
      .get<WindFarmResponse>(`/api/farms/${id}`)
      .then((response: AxiosResponse<WindFarmResponse>) => {
        if (typeof response?.data !== "undefined") {
          setFarm(response.data.data);
        }
      })
      .catch(e => {});
  }, [id]);

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
