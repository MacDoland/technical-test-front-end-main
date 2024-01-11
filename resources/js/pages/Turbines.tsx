import axios, { type AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

// TODO: extract types to dts file
interface WindTurbine {
  id: number;
  farm_id: number;
  lat: string;
  lng: string;
  name: string;
  created_at: string;
  update_at: string;
}

interface WindTurbineResponse {
  data: WindTurbine[];
}

const Farm: React.FC = () => {
  const [turbines, setTurbines] = useState<WindTurbine[]>([]);

  useEffect(() => {
    axios
      .get<WindTurbineResponse>("/api/turbines")
      .then((response: AxiosResponse<WindTurbineResponse>) => {
        if (typeof response?.data !== "undefined") {
          setTurbines(response.data.data);
        }
      })
      .catch(e => {});
  }, []);

  return (
    <>
      <Helmet>
        <title>Turbines</title>
      </Helmet>
      <h1>Turbines</h1>
      {turbines.map(turbine => {
        return (
          <div key={turbine.id}>
            <span>{turbine.name}</span>
            <NavLink to={`/turbine/${turbine.id}`}>view</NavLink>
          </div>
        );
      })}
    </>
  );
};

export default Farm;
