import {
  RollOnTableWithIcon,
  RollOnTableWithIconProps,
} from "./RollOnTableWithIcon";
import { TableInTooltip } from "./TableInTooltip";

export const RollOnTable = ({
  title = "Roll",
  table,
  ...rest
}: RollOnTableWithIconProps) => {
  return (
    <div>
      <TableInTooltip title={title} table={table} />
      <span className="italic">
        <RollOnTableWithIcon table={table} {...rest} />
      </span>{" "}
    </div>
  );
};
