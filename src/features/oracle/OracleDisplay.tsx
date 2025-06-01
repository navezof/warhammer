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
    <>
      <Div>
        <Button onClick={handleClick} className='font-bold'>
          {oracle.name}
        </Button>
        {oracle.description && <p>{oracle.description}</p>}
        {oracleAnswer && (
          <div className='mt-6 max-w-xs text-lg font-medium text-center'>
            {oracleAnswer}
          </div>
        )}
      </Div>
    </>
  );
};

export default OracleDisplay;
