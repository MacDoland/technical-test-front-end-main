import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

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

  useEffect(() => {
    axios.get(`/api/farms/${id}`).then(response => {
      if (response && response.data) {
        setFarm(response.data.data);
      }
    });
  }, []);

  return (
    <>
      <h1>Farms</h1>
      {farm && <div>{farm.name}</div>}
    </>
  );
};

export default Farm;
