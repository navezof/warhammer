import React from "react";
import { rollOnTable } from "../../utils/rolls";
import { RollOnAnswer } from "../../components/RollOnAnswer";
import { tableRepository } from "../../utils/tableRepository";

const SceneAdjustement: React.FC = () => {
  const [sceneAdjustement, setSceneAdjustement] = React.useState<string | null>(
    null
  );

  const handleClick = () => {
    setSceneAdjustement(
      rollOnTable(tableRepository.get("Scene Adjustement Table"))
    );
  };

  return (
    <div className="flex flex-col justify-center items-center p-2 space-y-2">
      <p>Si la scène est modifié, tirer la nature de la modification</p>
      <RollOnAnswer
        answer={sceneAdjustement}
        handleClick={handleClick}
        icon="dice"
      />
    </div>
  );
};

export default SceneAdjustement;
