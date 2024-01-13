/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getGradeType } from "../schema/endpoints";

const GradeType: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (typeof id === "undefined") {
    return <div>Loading...</div>;
  }

  const idNum = Number(id);
  const gradeType = useSuspense(getGradeType, { id: idNum });

  return (
    <>
      <Helmet>
        <title>GradeType</title>
      </Helmet>
      <h1>GradeType</h1>
      {isNotNullOrUndefined(gradeType) ? (
        <div>{gradeType?.data.name}</div>
      ) : null}
    </>
  );
};

export default GradeType;
