import { isNotNullOrUndefined } from "../helpers/helpers";

import type { TableItem } from "../types/types";
import TableRow from "./TableRow";

interface TableProps {
  items: TableItem[];
  showLinks?: boolean;
  childUrlName?: string;
  keyPrefix?: string;
  headings?: string[];
}

const Table = ({
  items,
  showLinks,
  childUrlName,
  keyPrefix,
  headings,
}: TableProps): JSX.Element => {
  return (
    <table className="w-full">
      <thead>
        <tr className="w-full flex justify-between">
          {headings?.map((heading, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <th key={`heading-${index}`} className="text-left">
              {heading}
            </th>
          ))}

          {showLinks === true ? (
            <th className="screen-reader-only">Action Button</th>
          ) : null}
        </tr>
      </thead>
      <tbody>
        {isNotNullOrUndefined(items)
          ? items.map((item, index) => {
              return (
                <TableRow
                  key={item.id}
                  item={item}
                  alternateWhen={index % 2 === 0}
                  childUrlName={childUrlName}
                  showLinks={showLinks}
                  keyPrefix={keyPrefix}
                />
              );
            })
          : null}
      </tbody>
    </table>
  );
};

Table.defaultProps = {
  headings: [],
  showLinks: false,
  childUrlName: "",
  keyPrefix: "",
};

export default Table;
export type { TableItem, TableProps };
