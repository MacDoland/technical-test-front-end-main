import { Helmet } from "react-helmet-async";
import { useSuspense } from "@rest-hooks/react";
import { isNotNullOrUndefined } from "../helpers/helpers";
import { getGradeTypes } from "../schema/endpoints";
import { convertDataItemsForDisplay } from "../helpers/table-helpers";
import Table from "../components/Table";

const GradeTypes: React.FC = () => {
  const gradeTypes = useSuspense(getGradeTypes);
  const gradeTypesTableItems = convertDataItemsForDisplay(gradeTypes.data);

  return (
    <>
      <Helmet>
        <title>Grade Types</title>
      </Helmet>
      <h1>Grade Types</h1>
      {isNotNullOrUndefined(gradeTypes) ? (
        <Table
          items={gradeTypesTableItems}
          headings={["Name"]}
          childUrlName="grade-types"
          showLinks
        />
      ) : null}
    </>
  );
};

export default GradeTypes;
