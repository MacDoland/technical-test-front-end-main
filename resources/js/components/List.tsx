import { NavLink } from "react-router-dom";
import isNotNullOrUndefined from "../helpers/helpers";

interface ListItem {
  id: number;
  name: string;
}

interface ListProps {
  items: ListItem[];
  showLinks?: boolean;
  childUrlName?: string;
}

const List = ({ items, showLinks, childUrlName }: ListProps): JSX.Element => {
  const urlPart = isNotNullOrUndefined(childUrlName) ? `/${childUrlName}` : "";

  // TODO: rethink what link url should be when childUrlName is not set
  // TODO: consider passing button into a slot

  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <span>{item.name}</span>
            {showLinks === true ? (
              <NavLink to={`${urlPart}/${item.id}`}>view</NavLink>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

List.defaultProps = {
  showLinks: false,
  childUrlName: "",
};

export default List;
export type { ListItem, ListProps };
