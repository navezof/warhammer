import React from "react";
import { FateOdds } from "./data/fateOdds";
import { rollOnFateTable } from "./rollOnFateTable";
import { useChaos } from "../chaos/useChaos";
import { useFateAnswer } from "./useFateAnswer";
import Button from "../../components/CustomButton";

const FateInput = () => {
  const { chaos } = useChaos();
  const { fateAnswer, setFateAnswer } = useFateAnswer();

  const handleClick = (odds: FateOdds) => {
    const fate = rollOnFateTable(odds, chaos);
    setFateAnswer(fate);
  };

  return (
    <div className="flex flex-col items-center p-1 space-y-2">
      <div className="grid grid-cols-3 gap-2 w-full">
        <Button size="sm" onClick={() => handleClick(FateOdds.Certain)}>
          Certainement
        </Button>
        <Button size="sm" onClick={() => handleClick(FateOdds.NearlyCertain)}>
          Presque certain
        </Button>
        <Button size="sm" onClick={() => handleClick(FateOdds.VeryLikely)}>
          Très probable
        </Button>
        <Button size="sm" onClick={() => handleClick(FateOdds.Likely)}>
          Probable
        </Button>
        <Button size="sm" onClick={() => handleClick(FateOdds.FiftyFifty)}>
          50/50
        </Button>
        <Button size="sm" onClick={() => handleClick(FateOdds.Unlikely)}>
          Peu probable
        </Button>
        <Button size="sm" onClick={() => handleClick(FateOdds.VeryUnlikely)}>
          Très improbable
        </Button>
        <Button
          size="sm"
          onClick={() => handleClick(FateOdds.NearlyImpossible)}
        >
          Quasi impossible
        </Button>
        <Button size="sm" onClick={() => handleClick(FateOdds.Impossible)}>
          Impossible
        </Button>
      </div>
      {fateAnswer && (
        <p className="text-m font-bold text-center border rounded p-2 w-full bg-gray-50">
          {fateAnswer}
        </p>
      )}
    </div>
  );
};

export default FateInput;
