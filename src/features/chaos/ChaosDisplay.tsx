import React from 'react';

type ChaosDisplayProps = {
  chaos: number;
};

const ChaosDisplay = ({ chaos }: ChaosDisplayProps) => {
  return <div>{chaos && <p>Chaos: {chaos}</p>}</div>;
};

export default ChaosDisplay;
