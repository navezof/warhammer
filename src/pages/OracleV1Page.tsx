import React, { useEffect } from 'react';
import { ageTable, npcQualities } from '../data/oracleTable';
import OracleDisplay from '../features/oracle/OracleDisplay';
import TableDropdown from '../components/TableDropdown';
import themeTable from '../data/themeTable';
import verbTable from '../data/verbTable';
import { Table } from '../types/type';
import {
  loadFromLocalStorage,
  storeItemsInLocalStorage,
} from '../utils/localStorageState';

const tableOptions: Table[] = [ageTable, npcQualities, themeTable, verbTable];

type OracleV1PageProps = {
  widgetId: string;
};

export const OracleV1Page = ({ widgetId }: OracleV1PageProps) => {
  const ORACLE_STORAGE_KEY_SUFFIX = 'ORACLE_STORAGE_KEY_SUFFIX';
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
    <div className='flex flex-col justify-center items-center p-4 text-white bg-gray-900'>
      <div>
        <TableDropdown
          tableOptions={tableOptions}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div>{selected && <OracleDisplay oracle={selected} />}</div>
    </div>
  );
};
