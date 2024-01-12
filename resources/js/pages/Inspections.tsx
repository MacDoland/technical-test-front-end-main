import { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import useGetData from "../hooks/useGetData";
import List from "../components/List";
import type { ListItem, Inspection } from "../types/types";
import isNotNullOrUndefined from "../helpers/helpers";

const Inspections: React.FC = () => {
  const inspections: Inspection[] | null = useGetData("/api/inspections");

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
          items={displayInspections(inspections as Inspection[])}
          childUrlName="inspections"
          showLinks
        />
      ) : null}
    </>
  );
};

export default Inspections;
