import React from "react";
import { rollDie } from "../../utils/rolls";
import { RollOnAnswer } from "../../components/RollOnAnswer";

type ChaosProps = {
  chaos: number;
};

const SceneAlterationDisplay = ({ chaos }: ChaosProps) => {
  const [sceneAlteration, setSceneAlteration] = React.useState<string | null>(
    null
  );

  const handleClick = () => {
    const d10 = rollDie("1d10");
    if (d10 > chaos) {
      setSceneAlteration(`(${d10}) La scène se déroule comme imaginé.`);
    } else if (d10 % 2 === 0) {
      setSceneAlteration(
        `(${d10}) Quelque chose vient modifier la scène. Tirer sur la Table d'Ajustement.`
      );
    } else {
      setSceneAlteration(
        `(${d10}) La scène n'est absolument pas ce qui a été prévu, tirer un Evenement Aléatoire!`
      );
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center p-2 space-y-2">
        <p>Comment se déroule la scène?</p>
        <RollOnAnswer
          answer={sceneAlteration}
          handleClick={handleClick}
          icon="dice"
        />
      </div>
    </>
  );
};

export default SceneAlterationDisplay;
