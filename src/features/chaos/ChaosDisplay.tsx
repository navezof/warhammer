import React from 'react';
import { useChaos } from './useChaos';

const ChaosDisplay = () => {
  // const { chaos } = useSoloRPGContext()
  const { chaos } = useChaos();

  return <div>{chaos && <p>Chaos : {chaos}</p>}</div>;
};

export default ChaosDisplay;
