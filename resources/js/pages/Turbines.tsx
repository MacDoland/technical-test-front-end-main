import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getTurbines } from "../schema/endpoints";
import { convertDataItemsForDisplay } from "../helpers/table-helpers";
import Table from "../components/Table";

const Turbines: React.FC = () => {
  const turbines = useSuspense(getTurbines);
  const turbinesTableItems = convertDataItemsForDisplay(turbines.data);

  return (
    <>
      <Helmet>
        <title>Turbines</title>
      </Helmet>
      <h1>Turbines</h1>
      {isNotNullOrUndefined(turbines) ? (
        <Table
          items={turbinesTableItems}
          childUrlName="turbines"
          headings={["Name"]}
          showLinks
        />
      ) : null}
    </>
  );
};

export default Turbines;
