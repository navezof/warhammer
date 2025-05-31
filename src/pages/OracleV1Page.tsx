import React from 'react';
import { ageTable, npcQualities } from '../data/oracleTable';
import OracleDisplay from '../features/oracle/OracleDisplay';
import TableDropdown from '../components/TableDropdown';
import themeTable from '../data/themeTable';
import verbTable from '../data/verbTable';
import { Table } from '../types/type';
import Div from '../components/CustomDiv';

const tableOptions: Table[] = [ageTable, npcQualities, themeTable, verbTable];

export const OracleV1Page = () => {
  const [selected, setSelected] = React.useState<Table | null>(null);

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
