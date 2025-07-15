import { FateOdds } from "./data/fateOdds";
import { rollOnFateTable } from "./rollOnFateTable";
import Button from "../../components/CustomButton";
import { useState } from "react";

type FateInputProps = {
  chaos: number;
};

const FateInput = ({ chaos }: FateInputProps) => {
  const [fateAnswer, setFateAnswer] = useState<string | null>(null);

  const handleClick = (odds: FateOdds) => {
    const fate = rollOnFateTable(odds, chaos);
    setFateAnswer(fate);
  };

  return (
    <div className="p-1">
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
      <div className="py-2 w-full">
        {fateAnswer && (
          <p className="text-m font-bold text-center border rounded p-2 w-full">
            {fateAnswer}
          </p>
        )}
      </div>
    </div>
  );
};

export default FateInput;
