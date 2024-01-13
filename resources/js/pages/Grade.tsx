/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import {
  isNotNullOrUndefined,
  mapComponentType,
  mapGradeType,
} from "../helpers/helpers";
import {
  getComponent,
  getComponentTypes,
  getGrade,
  getGradeTypes,
  getInspection,
} from "../schema/endpoints";

const Grade: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (typeof id === "undefined") {
    return <div>Loading...</div>;
  }

  const idNum = Number(id);
  const grade = useSuspense(getGrade, { id: idNum });
  const gradeTypes = useSuspense(getGradeTypes);
  const component = useSuspense(getComponent, { id: grade.data.component_id });
  const componentTypes = useSuspense(getComponentTypes);
  const inspection = useSuspense(getInspection, {
    id: grade.data.inspection_id,
  });

  const namedGrade = mapGradeType(grade.data, gradeTypes.data);
  const namedComponent = mapComponentType(component.data, componentTypes.data);

  return (
    <>
      <Helmet>
        <title>Grade</title>
      </Helmet>
      <h1>Grade</h1>
      {isNotNullOrUndefined(grade) ? (
        <div>{`Grade: ${namedGrade.name} - Component: ${namedComponent.name} - inspected on: ${inspection.data.inspected_at}`}</div>
      ) : null}
    </>
  );
};

export default Grade;
