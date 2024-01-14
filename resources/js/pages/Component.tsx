/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import {
  getComponent,
  getComponentTypes,
  getTurbine,
} from "../schema/endpoints";
import type { TableItem } from "../types/types";
import Table from "../components/Table";
import { mapComponentType } from "../helpers/table-helpers";

const Component: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (typeof id === "undefined") {
    return <div>Loading...</div>;
  }

  const idNum = Number(id);
  const component = useSuspense(getComponent, { id: idNum });
  const componentTypes = useSuspense(getComponentTypes);
  const namedComponent = mapComponentType(component.data, componentTypes.data);
  const turbine = useSuspense(getTurbine, { id: component.data.turbine_id });

  const tableItems: TableItem[] = [
    {
      id: component.data.id,
      display: (
        <>
          <td>{namedComponent?.name}</td>
          <td>{turbine.data.name}</td>
        </>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Component</title>
      </Helmet>
      <h1>Component</h1>
      {isNotNullOrUndefined(namedComponent) && isNotNullOrUndefined(turbine) ? (
        <Table
          headings={["Name", "Turbine"]}
          items={tableItems}
          childUrlName="components"
          showLinks
        />
      ) : null}
    </>
  );
};

export default Component;
