import { RollOnTableIcon, RollOnTableIconProps } from "./RollOnTableIcon";
import { TableInTooltip } from "./TableInTooltip";

export const RollOnTable = ({
  title = "Roll",
  table,
  ...rest
}: RollOnTableIconProps) => {
  return (
    <div>
      <TableInTooltip title={title} table={table} />
      <span className="italic">
        <RollOnTableIcon table={table} {...rest} />
      </span>{" "}
    </div>
  );
};
