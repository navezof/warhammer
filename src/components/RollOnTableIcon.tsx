import React from "react";
import { RpgIcon, RpgIconType } from "./RpgIcon";
import { Table } from "../types/type";
import { rollOnTable } from "../utils/rolls";

type RollOnTableIconProps = {
  table: Table;
  column: number;
  rpgIconType: RpgIconType;
};

export const RollOnTableIcon = ({
  table,
  rpgIconType,
}: RollOnTableIconProps) => {
  const [answer, setAnswer] = React.useState<string | null>(null);

  const rpgIcon = RpgIcon;

  const handleClick = () => {
    setAnswer(rollOnTable(table));
  };

  return (
    <span className="inline-flex items-center space-x-2">
      <button
        onClick={handleClick}
        className="inline-flex items-center justify-center w-8 h-8 bg-gray-on"
        title="Roll on table"
      >
        <RpgIcon iconType={"dice"} />
      </button>
      {answer && <p>({answer})</p>}
    </span>
  );
};
