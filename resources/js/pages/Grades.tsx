import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getGradeTypes, getGrades } from "../schema/endpoints";
import { mapGradesToTableItems } from "../helpers/table-helpers";
import Table from "../components/Table";

const Grades: React.FC = () => {
  const grades = useSuspense(getGrades);
  const gradeTypes = useSuspense(getGradeTypes);
  const gradesTableItems = mapGradesToTableItems(grades.data, gradeTypes.data);

  return (
    <>
      <Helmet>
        <title>Grades</title>
      </Helmet>
      <h1>Grades</h1>
      {isNotNullOrUndefined(grades) && isNotNullOrUndefined(gradeTypes) ? (
        <Table
          headings={["Name"]}
          items={gradesTableItems}
          childUrlName="grades"
          showLinks
        />
      ) : null}
    </>
  );
};

export default Grades;
