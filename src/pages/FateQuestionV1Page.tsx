import React from 'react';
import ChaosDisplay from '../features/chaos/ChaosDisplay';
import ChaosInput from '../features/chaos/ChaosInput';
import FateInput from '../features/fate/FateInput';

export const FateQuestionV1Page = () => {
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
