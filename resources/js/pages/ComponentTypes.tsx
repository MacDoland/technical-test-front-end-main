import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getComponentTypes } from "../schema/endpoints";
import { convertDataItemsForDisplay } from "../helpers/table-helpers";
import Table from "../components/Table";

const ComponentTypes: React.FC = () => {
  const componentTypes = useSuspense(getComponentTypes);
  const componentTypesTableItems = convertDataItemsForDisplay(
    componentTypes.data,
  );

  return (
    <>
      <Helmet>
        <title>Component Types</title>
      </Helmet>
      <h1>Component Types</h1>
      {isNotNullOrUndefined(componentTypes) ? (
        <Table
          items={componentTypesTableItems}
          headings={["Name"]}
          childUrlName="component-types"
          showLinks
        />
      ) : null}
    </>
  );
};

export default ComponentTypes;
