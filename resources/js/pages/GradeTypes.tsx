import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import List from "../components/List";
import type { ListItem } from "../types/types";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getGradeTypes } from "../schema/endpoints";

const GradeTypes: React.FC = () => {
  const gradeTypes = useSuspense(getGradeTypes);

  return (
    <>
      <Helmet>
        <title>GradeTypes</title>
      </Helmet>
      <h1>GradeTypes</h1>
      {isNotNullOrUndefined(gradeTypes) ? (
        <List
          items={gradeTypes.data as ListItem[]}
          childUrlName="grade-types"
          showLinks
        />
      ) : null}
    </>
  );
};

export default GradeTypes;
