import React from 'react';
import { useChaos } from './useChaos';

const ChaosDisplay = () => {
  // const { chaos } = useSoloRPGContext()
  const { chaos } = useChaos();

  return (
    <div className='flex flex-col justify-center items-center text-center'>
      {chaos && (
        <>
          <p className='text-6xl' font-bold mb-2>
            {chaos}
          </p>
          <p className='text-xl font-semibold tracking-wider uppercase'>
            chaos
          </p>
        </>
      )}
    </div>
  );
};

export default ChaosDisplay;
