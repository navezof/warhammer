import React from 'react';
import { FateOdds } from './data/fateOdds';
import { rollOnFateTable } from './rollOnFateTable';
import { useChaos } from '../chaos/useChaos';
import { useFateAnswer } from './useFateAnswer';

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
        <input
          type='text'
          id='fateQuestion'
          value={fateQuestion}
          onChange={(e) => setFateQuestion(e.target.value)}
          className='block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>
      <div className='grid grid-cols-9 gap-4'>
        <button
          onClick={() => handleClick(FateOdds.Certain)}
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Certain
        </button>
        <button
          onClick={() => handleClick(FateOdds.NearlyCertain)}
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Nearly Certain
        </button>
        <button
          onClick={() => handleClick(FateOdds.VeryLikely)}
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Very Likely
        </button>
        <button
          onClick={() => handleClick(FateOdds.Likely)}
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Likely
        </button>
        <button
          onClick={() => handleClick(FateOdds.FiftyFifty)}
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Fifty-Fifty
        </button>
        <button
          onClick={() => handleClick(FateOdds.Unlikely)}
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Unlikely
        </button>
        <button
          onClick={() => handleClick(FateOdds.VeryUnlikely)}
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Very Unlikely
        </button>
        <button
          onClick={() => handleClick(FateOdds.NearlyImpossible)}
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Nearly Impossible
        </button>
        <button
          onClick={() => handleClick(FateOdds.Impossible)}
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Impossible
        </button>
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
