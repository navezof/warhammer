import React from 'react';
import { createContext, PropsWithChildren, useContext } from 'react';

type RPGToolboxState = {
  chaos: number;
  setChaos: (value: number) => void;
  fateAnswer: string;
  setFateAnswer: (value: string) => void;
};

const RPGToolBoxContext = createContext<RPGToolboxState | null>(null);

export function RPGToolboxProvider({ children }: PropsWithChildren) {
  const [chaos, setChaos] = React.useState<number>(5);
  const [fateAnswer, setFateAnswer] = React.useState<string>('');

  return (
    <RPGToolBoxContext.Provider
      value={{ chaos, setChaos, fateAnswer, setFateAnswer }}
    >
      {children}
    </RPGToolBoxContext.Provider>
  );
}

export function useRPGToolboxContext() {
  const rpgToolboxContext = useContext(RPGToolBoxContext);
  if (!rpgToolboxContext)
    throw new Error('useRPGToolbox must be used in <RPGToolboxProvider>');
  return rpgToolboxContext;
}
