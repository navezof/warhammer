import React from "react";
import { Table } from "../types/type";

type TableDropdownProps = {
  tableOptions: Table[];
  selected: Table | null;
  setSelected: React.Dispatch<React.SetStateAction<Table | null>>;
};

function TableDropdown({
  tableOptions,
  selected,
  setSelected,
}: TableDropdownProps) {
  return (
    <select
      className="p-2 text-white bg-gray-800 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
      value={selected?.name || ""}
      onChange={(e) => {
        const option = tableOptions.find(
          (option) => option.name === e.target.value
        );
        setSelected(option || null);
      }}
    >
      <option value="">Select a table</option>
      {tableOptions.map((option) => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default TableDropdown;
