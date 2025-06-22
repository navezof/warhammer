import React, { useEffect } from 'react';
import { rollOnTable } from '../../utils/rolls';
import { Table } from '../../types/type';
import Button from '../../components/CustomButton';
import Div from '../../components/CustomDiv';

type OracleProps = {
  oracle: Table;
  index?: number;
  modifier?: number;
};

const OracleDisplay = ({ oracle, index = 1, modifier = 0 }: OracleProps) => {
  const [oracleAnswer, setOracleAnswer] = React.useState<string | null>('-');

  const handleClick = () => {
    setOracleAnswer(rollOnTable(oracle, index, modifier));
  };

  useEffect(() => {
    setOracleAnswer('-');
  }, [oracle]);

  return (
    <div className='flex flex-col items-center p-1 space-y-2'>
      {oracle.description && <p>{oracle.description}</p>}
      <Button onClick={handleClick}>Roll</Button>
      {oracleAnswer && (
        <div className='text-m font-bold text-center border rounded p-2 w-full bg-gray-50'>
          {oracleAnswer}
        </div>
      )}
    </div>
  );
};

export default OracleDisplay;
