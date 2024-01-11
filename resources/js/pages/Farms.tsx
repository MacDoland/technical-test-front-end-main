import { useState } from "react";
import { Helmet } from "react-helmet";
import useGetData from "../hooks/useGetData";
import List from "../components/List";

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
      <List items={farms} childUrlName="farms" />
    </>
  );
};

export default Farm;
