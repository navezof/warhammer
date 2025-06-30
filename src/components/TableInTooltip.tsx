import React, { useEffect } from "react";
import { Table } from "../types/type";

type TableInTooltipProps = {
  text: string;
  table: Table;
};

export const TableInTooltip = ({ text, table }: TableInTooltipProps) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setShowTooltip((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setShowTooltip(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTooltip]);

  return (
    <span>
      <button className="font-bold" onClick={handleClick}>
        {text}
      </button>
      {showTooltip && (
        <div
          ref={tooltipRef}
          className="absolute left-10 z-10 w-64 max-h-48 overflow-y-auto bg-white border border-gray-300 rounded shadow-lg p-2"
        >
          <table className="w-full text-sm">
            <tbody>
              {table.content.map((row, idx) => (
                <tr key={idx}>
                  {row.split(";").map((cell, i) => (
                    <td key={i} className="border-b px-2 py-1">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </span>
  );
};
