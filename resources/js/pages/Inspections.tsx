import { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import List from "../components/List";
import type { ListItem } from "../types/types";
import isNotNullOrUndefined from "../helpers/helpers";
import { getInspections } from "../schema/endpoints";
import type { Inspection } from "../schema/entities";

const Inspections: React.FC = () => {
  const inspections = useSuspense(getInspections);

  const mapInspections: (componentList: Inspection[]) => ListItem[] = (
    componentList: Inspection[],
  ) => {
    return componentList.map(item => {
      return {
        id: item.id,
        name: item.inspected_at,
      };
    });
  };

  const displayInspections = useCallback(mapInspections, []);

  return (
    <>
      <Helmet>
        <title>Inspections</title>
      </Helmet>
      <h1>Inspections</h1>
      {isNotNullOrUndefined(inspections) ? (
        <List
          items={displayInspections(inspections.data)}
          childUrlName="inspections"
          showLinks
        />
      ) : null}
    </>
  );
};

export default Inspections;
