import React from 'react';
import ChaosDisplay from '../features/chaos/ChaosDisplay';
import ChaosInput from '../features/chaos/ChaosInput';
import FateInput from '../features/fate/FateInput';

export const FateQuestionV1Page = () => {
  return (
    <div>
      <h1>Fate Question Page</h1>
      <div>
        <div>
          <ChaosDisplay />
          <ChaosInput />
        </div>
      </div>
      <div>
        <p>Fate</p>
        <FateInput />
      </div>
    </div>
  );
};
