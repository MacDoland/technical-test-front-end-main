import { NavLink } from "react-router-dom";
import isNotNullOrUndefined from "../helpers/helpers";

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
        ? items.map(item => {
            return (
              <li key={`${keyPrefix}${item.id}`}>
                <span>{item.name}</span>
                {showLinks === true ? (
                  <NavLink to={`${urlPart}/${item.id}`}>view</NavLink>
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
