import React from 'react';
import { useState } from 'react';
import { rollOnTable } from '../../utils/rolls';
import randomEventFocusTable from './data/randomEventFocusTable';

const RandomEventFocus = () => {
  const [randomEventFocus, setRandomEventFocus] = useState<string>('-');

  const onHandleClick = () => {
    setRandomEventFocus(rollOnTable(randomEventFocusTable, 1));
  };

  return (
    <>
      <div>
        <h2>Random Event Focus</h2>
        <button onClick={onHandleClick}>Random Event Focus</button>
        {randomEventFocus && <p>{randomEventFocus}</p>}
      </div>
    </>
  );
};

export default RandomEventFocus;
