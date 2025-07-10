import React, { useEffect } from "react";
import { ageTable, npcQualities } from "../../data/oracleTable";
import OracleDisplay from "./OracleDisplay";
import TableDropdown from "../../components/TableDropdown";
import themeTable from "../../data/themeTable";
import verbTable from "../../data/verbTable";
import { Table } from "../../types/type";
import {
  loadItemsFromLocalStorage,
  storeItemsInLocalStorage,
} from "../../utils/localStorageState";
import { TableInTooltip } from "../../components/TableInTooltip";

const tableOptions: Table[] = [ageTable, npcQualities, themeTable, verbTable];

type OracleWidgetProps = {
  widgetId: string;
};

export const OracleWidget = ({ widgetId }: OracleWidgetProps) => {
  const ORACLE_STORAGE_KEY_SUFFIX = "ORACLE_STORAGE_KEY_SUFFIX";
  const [selected, setSelected] = React.useState<Table | null>(
    loadItemsFromLocalStorage(`${widgetId}_${ORACLE_STORAGE_KEY_SUFFIX}`) ||
      null
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
    <div className="flex justify-center h-full">
      <div className="flex flex-col h-full">
        <div className="flex flex-row justify-center space-x-2">
          <TableDropdown
            tableOptions={tableOptions}
            selected={selected}
            setSelected={setSelected}
          />
          {selected && (
            <TableInTooltip
              text={selected.name}
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
