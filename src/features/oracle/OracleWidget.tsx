import React, { useEffect } from "react";
import { ageTable, npcQualities } from "../../data/oracleTable";
import OracleDisplay from "./OracleDisplay";
import TableDropdown from "../../components/TableDropdown";
import themeTable from "../../data/themeTable";
import verbTable from "../../data/verbTable";
import { Table } from "../../types/type";
import {
  loadFromLocalStorage,
  storeItemsInLocalStorage,
} from "../../utils/localStorageState";

const tableOptions: Table[] = [ageTable, npcQualities, themeTable, verbTable];

type OracleWidgetProps = {
  widgetId: string;
};

export const OracleWidget = ({ widgetId }: OracleWidgetProps) => {
  const ORACLE_STORAGE_KEY_SUFFIX = "ORACLE_STORAGE_KEY_SUFFIX";
  const [selected, setSelected] = React.useState<Table | null>(
    loadFromLocalStorage(`${widgetId}_${ORACLE_STORAGE_KEY_SUFFIX}`) || null
  );

  useEffect(() => {
    if (selected) {
      storeItemsInLocalStorage(
        selected,
        `${widgetId}_${ORACLE_STORAGE_KEY_SUFFIX}`
      );
    }
  }, [selected]);

  return (
    <div className="flex justify-center items-center bg-gray-50 h-full">
      <div className="p-1 mx-auto space-y-1 w-full">
        <div className="flex flex-row justify-center items-center p-1 space-x-2">
          <TableDropdown
            tableOptions={tableOptions}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div>{selected && <OracleDisplay oracle={selected} />}</div>
      </div>
    </div>
  );
};
