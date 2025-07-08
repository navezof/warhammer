import React from "react";
import { Table } from "../types/type";
import { FaDice } from "react-icons/fa";
import { rollOnTable } from "../utils/rolls";

type RollOnTableIconProps = {
  table: Table;
  column: number;
};

export const RollOnTableIcon = ({ table }: RollOnTableIconProps) => {
  const [answer, setAnswer] = React.useState<string | null>(null);

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
        <FaDice className="w-5 h-5 text-gray-700" />
      </button>
      {answer && <p>({answer})</p>}
    </span>
  );
};
