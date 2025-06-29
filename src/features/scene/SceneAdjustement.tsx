import React from 'react';
import sceneAdjustementTable from './data/sceneAdjustementTable';
import { rollOnTable } from '../../utils/rolls';
import Button from '../../components/CustomButton';

const SceneAdjustement: React.FC = () => {
  const [sceneAdjustement, setSceneAdjustement] = React.useState<string>('-');

  const handleClick = () => {
    setSceneAdjustement(rollOnTable(sceneAdjustementTable));
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center bg-gray-50 p-2 space-y-2'>
        <p>Si la scène est modifié, tirer la nature de la modification</p>
        <Button onClick={handleClick}>Modifier la scène</Button>
        {sceneAdjustement && (
          <p className='text-m font-bold text-center border rounded p-2 w-full bg-gray-50'>
            {sceneAdjustement}
          </p>
        )}
      </div>
    </>
  );
};

export default SceneAdjustement;
