import React from 'react';
import { useChaos } from './useChaos';

const ChaosDisplay = () => {
  // const { chaos } = useSoloRPGContext()
  const { chaos } = useChaos();

  return (
    <div className='flex flex-col items-center justify-center text-center'>
      {chaos && (
        <>
          <p className='text-6xl' font-bold mb-2>
            {chaos}
          </p>
          <p className='text-xl font-semibold uppercase tracking-wider'>
            chaos
          </p>
        </>
      )}
    </div>
  );
};

export default ChaosDisplay;
