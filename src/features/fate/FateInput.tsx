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
          className='flex flex-col items-center justify-center text-center italic'
        >
          Ask...
        </label>
        <input
          type='text'
          id='fateQuestion'
          value={fateQuestion}
          onChange={(e) => setFateQuestion(e.target.value)}
          className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>
      <div className='grid grid-cols-9 gap-4'>
        <button
          onClick={() => handleClick(FateOdds.Certain)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Certain
        </button>
        <button
          onClick={() => handleClick(FateOdds.NearlyCertain)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Nearly Certain
        </button>
        <button
          onClick={() => handleClick(FateOdds.VeryLikely)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Very Likely
        </button>
        <button
          onClick={() => handleClick(FateOdds.Likely)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Likely
        </button>
        <button
          onClick={() => handleClick(FateOdds.FiftyFifty)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Fifty-Fifty
        </button>
        <button
          onClick={() => handleClick(FateOdds.Unlikely)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Unlikely
        </button>
        <button
          onClick={() => handleClick(FateOdds.VeryUnlikely)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Very Unlikely
        </button>
        <button
          onClick={() => handleClick(FateOdds.NearlyImpossible)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Nearly Impossible
        </button>
        <button
          onClick={() => handleClick(FateOdds.Impossible)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Impossible
        </button>
      </div>
      <div>
        {fateAnswer && (
          <p className='flex flex-col items-center justify-center text-center h-25 border-2 border-solid font-bold rounded'>
            {fateAnswer}
          </p>
        )}
      </div>
    </>
  );
};

export default FateInput;
