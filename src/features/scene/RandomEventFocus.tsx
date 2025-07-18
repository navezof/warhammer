import React from "react";
import { useState } from "react";
import { rollOnTable } from "../../utils/rolls";
import { tableRepository } from "../../utils/tableRepository";

const RandomEventFocus = () => {
  const [randomEventFocus, setRandomEventFocus] = useState<string>("-");

  const onHandleClick = () => {
    setRandomEventFocus(
      rollOnTable(tableRepository.get("Random Event Focus"), 1)
    );
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
