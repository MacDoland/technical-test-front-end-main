import { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import List from "../components/List";
import { isNotNullOrUndefined, mapGradeTypes } from "../helpers/helpers";
import { getGradeTypes, getGrades } from "../schema/endpoints";

const Grades: React.FC = () => {
  const grades = useSuspense(getGrades);
  const gradeTypes = useSuspense(getGradeTypes);
  const displayGrades = useCallback(mapGradeTypes, []);

  return (
    <>
      <Helmet>
        <title>Grades</title>
      </Helmet>
      <h1>Grades</h1>
      {isNotNullOrUndefined(grades) && isNotNullOrUndefined(gradeTypes) ? (
        <List
          items={displayGrades(grades.data, gradeTypes.data)}
          childUrlName="grades"
          showLinks
        />
      ) : null}
    </>
  );
};

export default Grades;
