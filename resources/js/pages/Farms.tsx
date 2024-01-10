import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// TODO: extract types to dts file
interface WindFarm {
  id: number;
  name: string;
  created_at: string;
  update_at: string;
}

const Farm: React.FC = () => {
  const [farms, setFarms] = useState<WindFarm[]>([]);

  useEffect(() => {
    axios.get("/api/farms").then(response => {
      if (response && response.data) {
        setFarms(response.data.data);
      }
    });
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
