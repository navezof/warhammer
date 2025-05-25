import React from 'react';
import { FateOdds } from './data/fateOdds';
import { rollOnFateTable } from './rollOnFateTable';

type ChaosProps = {
  chaos: number;
};

const FateDisplay = ({ chaos }: ChaosProps) => {
  const [fate, setFate] = React.useState<string>('...');

  const handleClick = (odds: FateOdds) => {
    const fate = rollOnFateTable(odds, chaos);
    setFate(fate);
  };

  return (
    <>
      <div>
        <button onClick={() => handleClick(FateOdds.Certain)}>Certain</button>
        <button onClick={() => handleClick(FateOdds.NearlyCertain)}>
          Nearly Certain
        </button>
        <button onClick={() => handleClick(FateOdds.VeryLikely)}>
          Very Likely
        </button>
        <button onClick={() => handleClick(FateOdds.Likely)}>Likely</button>
        <button onClick={() => handleClick(FateOdds.FiftyFifty)}>
          Fifty-Fifty
        </button>
        <button onClick={() => handleClick(FateOdds.Unlikely)}>Unlikely</button>
        <button onClick={() => handleClick(FateOdds.VeryUnlikely)}>
          Very Unlikely
        </button>
        <button onClick={() => handleClick(FateOdds.NearlyImpossible)}>
          Nearly Impossible
        </button>
        <button onClick={() => handleClick(FateOdds.Impossible)}>
          Impossible
        </button>
      </div>
      {fate && <p>{fate}</p>}
    </>
  );
};

export default FateDisplay;
