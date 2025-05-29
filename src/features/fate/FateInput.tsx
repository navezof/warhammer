import React from 'react';
import { FateOdds } from './data/fateOdds';
import { rollOnFateTable } from './rollOnFateTable';
import { useChaos } from '../chaos/useChaos';
import { useFateAnswer } from './useFateAnswer';

const FateInput = () => {
  const { chaos } = useChaos();
  const { fateAnswer, setFateAnswer } = useFateAnswer();
  const [fateQuestion, setFateQuestion] = React.useState<string>('...');

  const handleClick = (odds: FateOdds) => {
    const fate = rollOnFateTable(odds, chaos);
    setFateAnswer(fate);
  };

  return (
    <>
      <div>
        <input
          type='text'
          value={fateQuestion}
          onChange={(e) => setFateQuestion(e.target.value)}
        />
      </div>
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
      <div>{fateAnswer && <p>{fateAnswer}</p>}</div>
    </>
  );
};

export default FateInput;
