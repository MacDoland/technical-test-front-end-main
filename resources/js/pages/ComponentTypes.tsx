import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import List from "../components/List";
import type { ListItem } from "../types/types";
import isNotNullOrUndefined from "../helpers/helpers";
import { getComponentTypes } from "../schema/endpoints";

const ComponentTypes: React.FC = () => {
  const componentTypes = useSuspense(getComponentTypes);

  return (
    <>
      <Helmet>
        <title>ComponentTypes</title>
      </Helmet>
      <h1>ComponentTypes</h1>
      {isNotNullOrUndefined(componentTypes) ? (
        <List
          items={componentTypes.data as ListItem[]}
          childUrlName="componentTypes"
          showLinks
        />
      ) : null}
    </>
  );
};

export default ComponentTypes;
