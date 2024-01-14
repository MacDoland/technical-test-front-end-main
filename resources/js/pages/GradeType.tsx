/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getGradeType } from "../schema/endpoints";
import Table from "../components/Table";

const GradeType: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (typeof id === "undefined") {
    return <div>Loading...</div>;
  }

  const idNum = Number(id);
  const gradeType = useSuspense(getGradeType, { id: idNum });
  const gradeTypeTableItems = [
    {
      id: gradeType?.data.id,
      display: <td>{gradeType?.data.name}</td>,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Grade Type</title>
      </Helmet>
      <h1>Grade Type</h1>
      {isNotNullOrUndefined(gradeType) ? (
        <Table headings={["Name"]} items={gradeTypeTableItems} />
      ) : null}
    </>
  );
};

export default GradeType;
