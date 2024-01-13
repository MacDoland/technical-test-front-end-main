import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import List from "../components/List";
import type { ListItem } from "../types/types";
import { isNotNullOrUndefined, mapComponentTurbines } from "../helpers/helpers";
import {
  getComponentTypes,
  getComponents,
  getTurbines,
} from "../schema/endpoints";

const Components: React.FC = () => {
  const components = useSuspense(getComponents);
  const turbines = useSuspense(getTurbines);
  const componentTypes = useSuspense(getComponentTypes);

  const namedComponents = mapComponentTurbines(
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
        <List
          items={namedComponents as ListItem[]}
          childUrlName="components"
          showLinks
        />
      ) : null}
    </>
  );
};

export default Components;
