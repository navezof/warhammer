import React from 'react';
import sceneAdjustementTable from './data/sceneAdjustementTable';
import { rollOnTable } from '../../utils/rolls';

const SceneAdjustement: React.FC = () => {
  const [sceneAdjustement, setSceneAdjustement] =
    React.useState<string>('Scene Adjustement');

  const handleClick = () => {
    setSceneAdjustement(rollOnTable(sceneAdjustementTable));
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Scene Adjustement</button>
        {sceneAdjustement && <p>{sceneAdjustement}</p>}
      </div>
    </>
  );
};

export default SceneAdjustement;
