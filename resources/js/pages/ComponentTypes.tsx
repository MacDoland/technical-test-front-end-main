import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import List from "../components/List";
import type { ListItem } from "../types/types";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getComponentTypes } from "../schema/endpoints";

const ComponentTypes: React.FC = () => {
  const componentTypes = useSuspense(getComponentTypes);

  return (
    <>
      <Helmet>
        <title>Component Types</title>
      </Helmet>
      <h1>Component Types</h1>
      {isNotNullOrUndefined(componentTypes) ? (
        <List
          items={componentTypes.data as ListItem[]}
          childUrlName="component-types"
          showLinks
        />
      ) : null}
    </>
  );
};

export default ComponentTypes;
