import React from 'react';
import ChaosDisplay from '../chaos/ChaosDisplay';
import ChaosInput from '../chaos/ChaosInput';
import FateInput from './FateInput';

export const FateQuestionWidget = () => {
  return (
    <div className='flex justify-center items-center bg-gray-50'>
      <div className='p-1 mx-auto space-y-1 w-full'>
        <div className='flex flex-col items-center p-1 space-y-1'>
          <ChaosDisplay />
          <ChaosInput />
        </div>
        <div className='p-1 space-y-1'>
          <FateInput />
        </div>
      </div>
    </div>
  );
};
