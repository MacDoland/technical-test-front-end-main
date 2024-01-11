import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import isNotNullOrUndefined from "../helpers/helpers";
import useGetData from "../hooks/useGetData";
import type { WindTurbine } from "../types/types";

const Turbine: React.FC = () => {
  const { id: turbineId } = useParams();

  const turbine: WindTurbine | null = useGetData(`/api/turbines/${turbineId}`);

  return (
    <>
      <Helmet>
        <title>Turbine</title>
      </Helmet>
      <h1>Turbine</h1>
      {isNotNullOrUndefined(turbine) ? <div>{turbine?.name}</div> : null}
    </>
  );
};

export default Turbine;
