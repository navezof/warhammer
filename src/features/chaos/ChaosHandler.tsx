import React from 'react';

type ChaosHandlerProps = {
  chaos: number;
  setChaos: (chaos: number) => void;
};

const ChaosHandler = ({ chaos, setChaos }: ChaosHandlerProps) => {
  const handleClick = (change: string) => {
    if (change.includes('+')) {
      const number = parseInt(change.replace('+', ''));
      if (!isNaN(number)) {
        setChaos(chaos + 1);
        console.log(`Chaos increased by 1.`);
        return;
      }
      console.error(`Invalid chaos change: ${change}`);
      return;
    }
    if (change.includes('-')) {
      const number = parseInt(change.replace('-', ''));
      if (!isNaN(number)) {
        setChaos(chaos - 1);
        console.log(`Chaos increased by 1.`);
        return;
      }
      console.error(`Invalid chaos change: ${change}`);
      return;
    }
    const number = parseInt(change);
    if (!isNaN(number)) {
      setChaos(number);
      console.log(`Chaos changed value.`);
      return;
    }
    console.error(`Invalid chaos change: ${change}`);
    return;
  };

  return (
    <div>
      <button onClick={() => handleClick('+1')}>Increase Chaos</button>
      <button onClick={() => handleClick('-1')}>Decrease Chaos</button>
      <button onClick={() => handleClick('5')}>Reset Chaos to 5</button>
    </div>
  );
};

export default ChaosHandler;
