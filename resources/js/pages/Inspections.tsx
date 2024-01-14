import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getInspections, getTurbines } from "../schema/endpoints";
import { mapInspectedTurbinesToTableItems } from "../helpers/table-helpers";
import Table from "../components/Table";

const Inspections: React.FC = () => {
  const inspections = useSuspense(getInspections);
  const turbines = useSuspense(getTurbines);
  const displayInspections = mapInspectedTurbinesToTableItems(
    inspections.data,
    turbines.data,
  );

  return (
    <>
      <Helmet>
        <title>Inspections</title>
      </Helmet>
      <h1>Inspections</h1>
      {isNotNullOrUndefined(inspections) && isNotNullOrUndefined(turbines) ? (
        <Table
          items={displayInspections}
          headings={["Inspected On", "Turbine"]}
          childUrlName="inspections"
          showLinks
        />
      ) : null}
    </>
  );
};

export default Inspections;
