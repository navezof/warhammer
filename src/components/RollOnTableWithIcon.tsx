import React from "react";
import { RpgIcon, RpgIconType } from "./RpgIcon";
import { Table } from "../types/type";
import { rollOnTable } from "../utils/rolls";

export type RollOnTableWithIconProps = {
  table: Table;
  numberOfRoll?: number;
  column?: number;
  iconType?: RpgIconType;
  title?: string;
};

export const RollOnTableWithIcon = ({
  table,
  numberOfRoll = 1,
  column = 1,
  iconType,
  title,
}: RollOnTableWithIconProps) => {
  const [answer, setAnswer] = React.useState<string | null>(null);

  const handleRollOnTable = (numberOfRoll: number) => {
    const rolls = Array.from({ length: numberOfRoll }, () =>
      rollOnTable(table, column)
    );
    setAnswer(rolls.join(" "));
  };

  return (
    <span className="inline-flex items-center space-x-2">
      <button
        onClick={() => handleRollOnTable(numberOfRoll)}
        className="inline-flex items-center justify-center w-8 h-8 bg-gray-on"
        title="Roll on table"
      >
        {iconType ? (
          <RpgIcon iconType={iconType} />
        ) : (
          <span>{title || "Roll"}</span>
        )}
      </button>
      {answer && <span>({answer})</span>}
    </span>
  );
};
