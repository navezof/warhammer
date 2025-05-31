import React from 'react';
import ChaosDisplay from '../features/chaos/ChaosDisplay';
import ChaosInput from '../features/chaos/ChaosInput';
import FateInput from '../features/fate/FateInput';

export const FateQuestionV1Page = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='w-full mx-auto p-6 space-y-8'>
        <h1 className='text-3xl font-bold text-center text-gray-900'>
          Fate Question Page
        </h1>

        <div className='bg-white rounded-lg shadow p-6 space-y-6'>
          <div className='space-y-4'>
            <ChaosDisplay />
            <ChaosInput />
          </div>
        </div>

        <div className='bg-white rounded-lg shadow p-6 space-y-4'>
          <FateInput />
        </div>
      </div>
    </div>
  );
};
