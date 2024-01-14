/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getComponentType } from "../schema/endpoints";
import Table from "../components/Table";

const ComponentType: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (typeof id === "undefined") {
    return <div>Loading...</div>;
  }

  const idNum = Number(id);
  const componentType = useSuspense(getComponentType, { id: idNum });

  const componentTypeTableItems = [
    {
      id: componentType.data.id,
      display: <td>{componentType?.data.name}</td>,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Component Type</title>
      </Helmet>
      <h1>Component Type</h1>
      {isNotNullOrUndefined(componentType) ? (
        <Table
          items={componentTypeTableItems}
          headings={["Name"]}
          childUrlName="component-types"
        />
      ) : null}
    </>
  );
};

export default ComponentType;
