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
    <div className='flex gap-4 justify-center items-center'>
      <button
        onClick={() => handleClick('-1')}
        className='flex justify-center items-center w-10 h-10 bg-gray-200 rounded transition-colors hover:bg-gray-300'
      >
        <span className='text-2xl'>&larr;</span>
      </button>
      <button
        onClick={() => handleClick('5')}
        className='px-4 py-1 font-bold bg-gray-200 rounded transition-colors hover:bg-gray-300'
      >
        Reset
      </button>
      <button
        onClick={() => handleClick('+1')}
        className='flex justify-center items-center w-10 h-10 bg-gray-200 rounded transition-colors hover:bg-gray-300'
      >
        <span className='text-2xl'>&rarr;</span>
      </button>
    </div>
  );
};

export default ChaosInput;
