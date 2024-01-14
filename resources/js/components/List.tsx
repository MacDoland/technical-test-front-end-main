import { NavLink } from "react-router-dom";
import { isNotNullOrUndefined } from "../helpers/helpers";

import type { ListItem } from "../types/types";

interface ListProps {
  items: ListItem[];
  showLinks?: boolean;
  childUrlName?: string;
  keyPrefix?: string;
}

const List = ({
  items,
  showLinks,
  childUrlName,
  keyPrefix,
}: ListProps): JSX.Element => {
  const urlPart = isNotNullOrUndefined(childUrlName) ? `/${childUrlName}` : "";

  // TODO: rethink what link url should be when childUrlName is not set
  // TODO: consider passing button into a slot

  return (
    <ul>
      {isNotNullOrUndefined(items)
        ? items.map((item, index) => {
            return (
              <li
                key={`${keyPrefix}${item.id}`}
                className={`${
                  index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
                } p-2 border-t border-slate-300 flex gap-4 items-center justify-between`}>
                <span>{item.name}</span>
                {showLinks === true ? (
                  <NavLink
                    className="text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-teeak-700 dark:hover:bg-teal-900 focus:outline-none dark:focus:ring-blue-800"
                    to={`${urlPart}/${item.id}`}>
                    view
                  </NavLink>
                ) : null}
              </li>
            );
          })
        : null}
    </ul>
  );
};

List.defaultProps = {
  showLinks: false,
  childUrlName: "",
  keyPrefix: "",
};

export default List;
export type { ListItem, ListProps };
