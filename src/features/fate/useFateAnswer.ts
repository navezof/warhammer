import { useRPGToolboxContext } from '../../RPGToolboxContext';

export const useFateAnswer = () => {
  const { fateAnswer, setFateAnswer } = useRPGToolboxContext();

  return {
    fateAnswer,
    setFateAnswer,
  };
};
