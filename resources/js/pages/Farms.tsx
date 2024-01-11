import { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import useGetData from "../hooks/useGetData";

// TODO: extract types to dts file
interface WindFarm {
  id: number;
  name: string;
  created_at: string;
  update_at: string;
}

const Farm: React.FC = () => {
  const [farms, setFarms] = useState<WindFarm[]>([]);

  useGetData("/api/farms", setFarms);

  return (
    <>
      <Helmet>
        <title>Farms</title>
      </Helmet>
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
