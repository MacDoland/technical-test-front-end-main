/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Look into ensuring either useParams can't be undefined or extracting part of the component to ensure hooks satisfy above rule

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import {
  getComponentTypes,
  getGradeTypes,
  getInspection,
  getInspectionGrades,
  getTurbine,
} from "../schema/endpoints";
import Table from "../components/Table";
import { mapGradedComponentsToTableItems } from "../helpers/table-helpers";

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

  const inspectionTableItems = [
    {
      id: inspection.data.id,
      display: (
        <>
          <td>{inspection?.data.inspected_at}</td>
          <td>{turbine.data.name}</td>
        </>
      ),
    },
  ];

  const gradesTableItems = mapGradedComponentsToTableItems(
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
        <Table
          items={inspectionTableItems}
          headings={["Inspected On", "Table"]}
        />
      ) : null}
      {isNotNullOrUndefined(gradesTableItems) ? (
        <>
          <h2>Grades</h2>
          <Table
            items={gradesTableItems}
            showLinks
            childUrlName="grades"
            keyPrefix="grade-"
            headings={["Component", "Grade"]}
          />
        </>
      ) : null}
    </>
  );
};

export default Inspection;
