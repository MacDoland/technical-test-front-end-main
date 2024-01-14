import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getFarms } from "../schema/endpoints";
import { convertDataItemsForDisplay } from "../helpers/table-helpers";
import Table from "../components/Table";

const Farms: React.FC = () => {
  const farms = useSuspense(getFarms);

  const farmsTableItems = convertDataItemsForDisplay(farms.data);

  return (
    <>
      <Helmet>
        <title>Farms</title>
      </Helmet>
      <h1>Farms</h1>
      {isNotNullOrUndefined(farms) ? (
        <Table
          items={farmsTableItems}
          childUrlName="farms"
          showLinks
          headings={["Name"]}
        />
      ) : null}
    </>
  );
};

export default Farms;
