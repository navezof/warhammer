import React from 'react';
import { rollDie } from '../../utils/rolls';
import Button from '../../components/CustomButton';

type ChaosProps = {
  chaos: number;
};

const SceneAlterationDisplay = ({ chaos }: ChaosProps) => {
  const [sceneAlteration, setSceneAlteration] = React.useState<string>('-');

  const handleClick = () => {
    const d10 = rollDie('1d10');
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
      <div className='flex flex-col justify-center items-center bg-gray-50 p-2 space-y-2'>
        <p>Comment se déroule la scène?</p>
        <Button onClick={handleClick}>Tester la scène</Button>
        {sceneAlteration && (
          <p className='text-m font-bold text-center border rounded p-2 w-full bg-gray-50'>
            {sceneAlteration}
          </p>
        )}
      </div>
    </>
  );
};

export default SceneAlterationDisplay;
