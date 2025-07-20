import React, { useEffect } from "react";
import OracleDisplay from "./OracleDisplay";
import TableDropdown from "../../components/TableDropdown";
import { Table } from "../../types/type";
import {
  loadItemsFromLocalStorage,
  storeItemsInLocalStorage,
} from "../../utils/localStorageState";
import { TableInTooltip } from "../../components/TableInTooltip";
import { tableRepository } from "../../utils/tableRepository";

type OracleWidgetProps = {
  widgetId: string;
};

export const OracleWidget = ({ widgetId }: OracleWidgetProps) => {
  const ORACLE_STORAGE_KEY_SUFFIX = "oracle";
  const storageKey = `${widgetId}_${ORACLE_STORAGE_KEY_SUFFIX}`;
  const [selected, setSelected] = React.useState<Table | null>(
    loadItemsFromLocalStorage(storageKey) || null
  );

  const tableData = tableRepository.getAll();

  useEffect(() => {
    if (selected) {
      storeItemsInLocalStorage(selected, storageKey);
    }
  }, [selected, storageKey]);

  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col h-full">
        <div className="flex flex-row justify-center space-x-2">
          {tableData && (
            <TableDropdown
              tableOptions={tableData}
              selected={selected}
              setSelected={setSelected}
            />
          )}
          {selected && (
            <TableInTooltip
              title={selected.name}
              table={selected}
              useIcon={true}
            />
          )}
        </div>
        <div className="flex justify-center items-center w-full h-full">
          {selected && <OracleDisplay oracle={selected} />}
        </div>
      </div>
    </div>
  );
};
