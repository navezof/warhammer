import React from 'react';
import { rollOnTable } from '../../utils/rolls';
import { Table } from '../../types/type';

type OracleProps = {
  oracle: Table;
  index?: number;
  modifier?: number;
};

const OracleDisplay = ({ oracle, index = 1, modifier = 0 }: OracleProps) => {
  const [oracleAnswer, setOracleAnswer] = React.useState<string | null>(null);

  const handleClick = () => {
    setOracleAnswer(rollOnTable(oracle, index, modifier));
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>{oracle.name}</button>
        {oracle.description && <p>{oracle.description}</p>}
      </div>
      {oracleAnswer && <p>{oracleAnswer}</p>}
    </>
  );
};

export default OracleDisplay;
