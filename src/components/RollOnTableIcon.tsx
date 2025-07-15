import React from "react";
import { RpgIcon, RpgIconType } from "./RpgIcon";
import { Table } from "../types/type";
import { rollOnTable } from "../utils/rolls";

export type RollOnTableIconProps = {
  table: Table;
  numberOfRoll?: number;
  column?: number;
  iconType?: RpgIconType;
  title?: string;
};

export const RollOnTableIcon = ({
  table,
  numberOfRoll = 1,
  column = 1,
  iconType,
  title,
}: RollOnTableIconProps) => {
  const [answer, setAnswer] = React.useState<string | null>(null);

  const handleRollOnTable = (numberOfRoll: number) => {
    let answer = "";
    for (let i = 0; i < numberOfRoll; i++) {
      answer += rollOnTable(table, column) + (i < numberOfRoll - 1 ? " " : "");
    }
    setAnswer(answer);
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
