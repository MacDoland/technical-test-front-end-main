import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import {
  getComponentTypes,
  getComponents,
  getTurbines,
} from "../schema/endpoints";
import Table from "../components/Table";
import { mapComponentTurbinesToTableItem } from "../helpers/table-helpers";

const Components: React.FC = () => {
  const components = useSuspense(getComponents);
  const turbines = useSuspense(getTurbines);
  const componentTypes = useSuspense(getComponentTypes);

  const namedComponents = mapComponentTurbinesToTableItem(
    components.data,
    componentTypes.data,
    turbines.data,
  );

  return (
    <>
      <Helmet>
        <title>Components</title>
      </Helmet>
      <h1>Components</h1>
      {isNotNullOrUndefined(components) ? (
        <Table
          headings={["Name", "Turbine"]}
          items={namedComponents}
          childUrlName="components"
          showLinks
        />
      ) : null}
    </>
  );
};

export default Components;
