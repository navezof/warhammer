import React from 'react';
import ChaosDisplay from '../features/chaos/ChaosDisplay';
import ChaosInput from '../features/chaos/ChaosInput';
import FateInput from '../features/fate/FateInput';

export const FateQuestionV1Page = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-50'>
      <div className='p-6 mx-auto space-y-8 w-full'>
        <h1 className='text-3xl font-bold text-center text-gray-900'>
          Fate Question Page
        </h1>

        <div className='p-6 space-y-6 bg-white rounded-lg shadow'>
          <div className='space-y-4'>
            <ChaosDisplay />
            <ChaosInput />
          </div>
        </div>

        <div className='p-6 space-y-4 bg-white rounded-lg shadow'>
          <FateInput />
        </div>
      </div>
    </div>
  );
};
