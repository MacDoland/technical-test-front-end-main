/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined, mapGradedComponents } from "../helpers/helpers";
import {
  getComponentTypes,
  getGradeTypes,
  getInspection,
  getInspectionGrades,
  getTurbine,
} from "../schema/endpoints";
import List from "../components/List";

const Inspection: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (typeof id === "undefined") {
    return <div>Loading...</div>;
  }

  const idNum = Number(id);
  const inspection = useSuspense(getInspection, { id: idNum });

  const inspectionGrades = useSuspense(getInspectionGrades, {
    id: idNum,
  });

  const turbine = useSuspense(getTurbine, { id: inspection.data.turbine_id });
  const gradeTypes = useSuspense(getGradeTypes);
  const componentTypes = useSuspense(getComponentTypes);

  const gradesViewModel = mapGradedComponents(
    inspectionGrades.data,
    componentTypes.data,
    gradeTypes.data,
  );

  return (
    <>
      <Helmet>
        <title>Inspection</title>
      </Helmet>
      <h1>Inspection</h1>
      {isNotNullOrUndefined(inspection) ? (
        <div>
          {`Turbine: ${turbine.data.name} inspected on: ${inspection?.data.inspected_at}`}
        </div>
      ) : null}
      {isNotNullOrUndefined(gradesViewModel) ? (
        <>
          <h2>Grades</h2>
          <List
            items={gradesViewModel}
            showLinks
            childUrlName="grades"
            keyPrefix="grade-"
          />
        </>
      ) : null}
    </>
  );
};

export default Inspection;
