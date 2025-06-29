import React from 'react';
import SceneAdjustement from './SceneAdjustement';
import SceneAlterationDisplay from './SceneAlterationDisplay';
import { useChaos } from '../chaos/useChaos';

export const Scene = () => {
  const { chaos } = useChaos();

  return (
    <div className='flex flex-col justify-center items-center bg-gray-50'>
      <SceneAlterationDisplay chaos={chaos} />
      <SceneAdjustement />
    </div>
  );
};
