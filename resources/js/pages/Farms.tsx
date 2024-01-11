import axios, { type AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// TODO: extract types to dts file
interface WindFarm {
  id: number;
  name: string;
  created_at: string;
  update_at: string;
}

interface WindFarmResponse {
  data: WindFarm[];
}

const Farm: React.FC = () => {
  const [farms, setFarms] = useState<WindFarm[]>([]);

  useEffect(() => {
    axios
      .get<WindFarmResponse>("/api/farms")
      .then((response: AxiosResponse<WindFarmResponse>) => {
        if (typeof response?.data !== "undefined") {
          setFarms(response.data.data);
        }
      })
      .catch(e => {});
  }, []);

  return (
    <>
      <h1>Farms</h1>
      {farms.map(farm => {
        return (
          <div key={farm.id}>
            <span>{farm.name}</span>
            <NavLink to={`/farm/${farm.id}`}>view</NavLink>
          </div>
        );
      })}
    </>
  );
};

export default Farm;
