import { NavLink } from "react-router-dom";
import { isNotNullOrUndefined } from "../helpers/helpers";

import type { ListItem } from "../types/types";

interface ListProps {
  items: ListItem[];
  showLinks?: boolean;
  childUrlName?: string;
  keyPrefix?: string;
  headings?: String[];
}

const List = ({
  items,
  showLinks,
  childUrlName,
  keyPrefix,
  headings,
}: ListProps): JSX.Element => {
  const urlPart = isNotNullOrUndefined(childUrlName) ? `/${childUrlName}` : "";

  // TODO: rethink what link url should be when childUrlName is not set
  // TODO: consider passing button into a slot

  return (
    <table className="w-full">
      <colgroup>
        <col span={1} style={{ width: "10%" }} />
        <col span={1} style={{ width: "85%" }} />
        <col span={1} style={{ width: "5%" }} />
      </colgroup>
      <thead>
        <tr className="w-full">
          {headings?.map(heading => <th className="text-left">{heading}</th>)}
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
                  } p-2 border-t border-slate-300  w-full`}>
                  {item.name}
                  {showLinks === true ? (
                    <td>
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

List.defaultProps = {
  showLinks: false,
  childUrlName: "",
  keyPrefix: "",
};

export default List;
export type { ListItem, ListProps };
