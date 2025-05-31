import React from 'react';
import { useChaos } from './useChaos';

const ChaosInput = () => {
  const { chaos, setChaos } = useChaos();

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
    <div className='flex items-center justify-center gap-4'>
      <button
        onClick={() => handleClick('-1')}
        className='w-10 h-10 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 transition-colors'
      >
        <span className='text-2xl'>&larr;</span>
      </button>
      <button
        onClick={() => handleClick('5')}
        className='bg-gray-200 hover:bg-gray-300 font-bold py-1 px-4 rounded transition-colors'
      >
        Reset
      </button>
      <button
        onClick={() => handleClick('+1')}
        className='w-10 h-10 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 transition-colors'
      >
        <span className='text-2xl'>&rarr;</span>
      </button>
    </div>
  );
};

export default ChaosInput;
