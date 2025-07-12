import { Table } from '../types/type';
import { RollOnTableIcon } from './RollOnTableIcon';
import { RpgIconType } from './RpgIcon';
import { TableInTooltip } from './TableInTooltip';

type RollOnTableProps = {
  title: string;
  table: Table;
  column?: number;
  rpgIconType?: RpgIconType;
};

export const RollOnTable = ({
  title,
  table,
  column,
  rpgIconType,
}: RollOnTableProps) => {
  return (
    <div>
      <TableInTooltip text={title} table={table} />
      <span className='italic'>
        <RollOnTableIcon
          table={table}
          column={column}
          rpgIconType={rpgIconType}
        />
      </span>{' '}
    </div>
  );
};
