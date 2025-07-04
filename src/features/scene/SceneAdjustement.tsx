import React from "react";
import sceneAdjustementTable from "./data/sceneAdjustementTable";
import { rollOnTable } from "../../utils/rolls";
import Button from "../../components/CustomButton";
import { RollOnAnswer } from "../../components/RollOnAnswer";

const SceneAdjustement: React.FC = () => {
  const [sceneAdjustement, setSceneAdjustement] = React.useState<string | null>(
    null
  );

  const handleClick = () => {
    setSceneAdjustement(rollOnTable(sceneAdjustementTable));
  };

  return (
    <div className="flex flex-col justify-center items-center p-2 space-y-2">
      <p>Si la scène est modifié, tirer la nature de la modification</p>
      <RollOnAnswer answer={sceneAdjustement} handleClick={handleClick} />
    </div>
  );
};

export default SceneAdjustement;
