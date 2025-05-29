import { useRPGToolboxContext } from '../../RPGToolboxContext';

export const useChaos = () => {
  const { chaos, setChaos } = useRPGToolboxContext();

  return {
    chaos,
    setChaos,
  };
};
