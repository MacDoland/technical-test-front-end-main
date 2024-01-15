import { isNotNullOrUndefined } from "../helpers/helpers";
import type { TableItem } from "../types/types";
import ButtonNavLink from "./ButtonNavLink";

interface TableProps {
  item: TableItem;
  showLinks?: boolean;
  childUrlName?: string;
  keyPrefix?: string;
  alternateWhen?: boolean;
  appendIdToLink?: boolean;
}

const TableRow: React.FC<TableProps> = ({
  item,
  keyPrefix,
  alternateWhen,
  childUrlName,
  showLinks,
  appendIdToLink,
}: TableProps) => {
  const urlPart = isNotNullOrUndefined(childUrlName) ? `/${childUrlName}` : "";
  return (
    <tr
      key={`${keyPrefix}${item.id}`}
      className={`${
        alternateWhen === true ? "bg-slate-200" : "bg-slate-100"
      } border-t border-slate-300 w-full flex justify-between `}>
      {item.display}
      {showLinks === true ? (
        <td className="text-right">
          <ButtonNavLink
            to={`${urlPart}/${appendIdToLink === true ? item.id : ""}`}>
            view
          </ButtonNavLink>
        </td>
      ) : null}
    </tr>
  );
};

TableRow.defaultProps = {
  showLinks: false,
  childUrlName: "",
  keyPrefix: "",
  alternateWhen: false,
  appendIdToLink: true,
};

export default TableRow;
