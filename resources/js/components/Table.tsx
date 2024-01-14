import { NavLink } from "react-router-dom";
import { isNotNullOrUndefined } from "../helpers/helpers";

import type { TableItem } from "../types/types";

interface TableProps {
  items: TableItem[];
  showLinks?: boolean;
  childUrlName?: string;
  keyPrefix?: string;
  headings?: String[];
}

const Table = ({
  items,
  showLinks,
  childUrlName,
  keyPrefix,
  headings,
}: TableProps): JSX.Element => {
  const urlPart = isNotNullOrUndefined(childUrlName) ? `/${childUrlName}` : "";

  // TODO: rethink what link url should be when childUrlName is not set
  // TODO: consider passing button into a slot

  return (
    <table className="w-full">
      <thead>
        <tr className="w-full flex justify-between">
          {headings?.map((heading, index) => (
            <th key={index} className="text-left">
              {heading}
            </th>
          ))}

          {showLinks === true ? <th></th> : null}
        </tr>
      </thead>
      <tbody>
        {isNotNullOrUndefined(items)
          ? items.map((item, index) => {
              return (
                <tr
                  key={`${keyPrefix}${item.id}`}
                  className={`${
                    index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
                  } border-t border-slate-300 w-full flex justify-between `}>
                  {item.display}
                  {showLinks === true ? (
                    <td className="text-right">
                      <NavLink
                        className="text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-teeak-700 dark:hover:bg-teal-900 focus:outline-none dark:focus:ring-blue-800"
                        to={`${urlPart}/${item.id}`}>
                        view
                      </NavLink>
                    </td>
                  ) : null}
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};

Table.defaultProps = {
  showLinks: false,
  childUrlName: "",
  keyPrefix: "",
};

export default Table;
export type { TableItem, TableProps };
