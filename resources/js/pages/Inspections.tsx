import { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import List from "../components/List";
import { isNotNullOrUndefined, mapInspectedTurbines } from "../helpers/helpers";
import { getInspections, getTurbines } from "../schema/endpoints";

const Inspections: React.FC = () => {
  const inspections = useSuspense(getInspections);
  const turbines = useSuspense(getTurbines);
  const displayInspections = useCallback(mapInspectedTurbines, []);

  return (
    <>
      <Helmet>
        <title>Inspections</title>
      </Helmet>
      <h1>Inspections</h1>
      {isNotNullOrUndefined(inspections) && isNotNullOrUndefined(turbines) ? (
        <List
          items={displayInspections(inspections.data, turbines.data)}
          childUrlName="inspections"
          showLinks
        />
      ) : null}
    </>
  );
};

export default Inspections;
