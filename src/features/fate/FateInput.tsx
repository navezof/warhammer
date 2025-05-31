import React from 'react';
import { FateOdds } from './data/fateOdds';
import { rollOnFateTable } from './rollOnFateTable';
import { useChaos } from '../chaos/useChaos';
import { useFateAnswer } from './useFateAnswer';
import Button from '../../components/CustomButton';
import TextArea from '../../components/CustomTextArea';

const FateInput = () => {
  const { chaos } = useChaos();
  const { fateAnswer, setFateAnswer } = useFateAnswer();
  const [fateQuestion, setFateQuestion] = React.useState<string>('');

  const handleClick = (odds: FateOdds) => {
    const fate = rollOnFateTable(odds, chaos);
    setFateAnswer(fate);
  };

  return (
    <>
      <div>
        <label
          htmlFor='fateQuestion'
          className='flex flex-col justify-center items-center italic text-center'
        >
          Ask...
        </label>
        <TextArea
          id='fateQuestion'
          value={fateQuestion}
          onChange={(e) => setFateQuestion(e.target.value)}
        />
      </div>
      <div className='grid grid-cols-9 gap-4'>
        <Button onClick={() => handleClick(FateOdds.Certain)}>Certain</Button>
        <Button onClick={() => handleClick(FateOdds.NearlyCertain)}>
          Nearly Certain
        </Button>
        <Button onClick={() => handleClick(FateOdds.VeryLikely)}>
          Very Likely
        </Button>
        <Button onClick={() => handleClick(FateOdds.Likely)}>Likely</Button>
        <Button onClick={() => handleClick(FateOdds.FiftyFifty)}>
          Fifty-Fifty
        </Button>
        <Button onClick={() => handleClick(FateOdds.Unlikely)}>Unlikely</Button>
        <Button onClick={() => handleClick(FateOdds.VeryUnlikely)}>
          Very Unlikely
        </Button>
        <Button onClick={() => handleClick(FateOdds.NearlyImpossible)}>
          Nearly Impossible
        </Button>
        <Button onClick={() => handleClick(FateOdds.Impossible)}>
          Impossible
        </Button>
      </div>
      <div>
        {fateAnswer && (
          <p className='flex flex-col justify-center items-center font-bold text-center rounded border-2 border-solid h-25'>
            {fateAnswer}
          </p>
        )}
      </div>
    </>
  );
};

export default FateInput;
