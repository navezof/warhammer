import React from 'react';
import { rollDie } from '../../utils/rolls';

type ChaosProps = {
  chaos: number;
};

const SceneAlterationDisplay = ({ chaos }: ChaosProps) => {
  const [sceneAlteration, setSceneAlteration] =
    React.useState<string>('Scene Alteration');

  const handleClick = () => {
    const d10 = rollDie('1d10');
    if (d10 > chaos) {
      setSceneAlteration(`(${d10}) The scene happens as expected.`);
    } else if (d10 % 2 === 0) {
      setSceneAlteration(
        `(${d10}) Something unexpected happens in the scene. Roll on Scene Adjustement Table.`
      );
    } else {
      setSceneAlteration(
        `(${d10}) The scene is being interupted by something!`
      );
    }
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>News scene</button>
      </div>
      {sceneAlteration && <p>{sceneAlteration}</p>}
    </>
  );
};

export default SceneAlterationDisplay;
