import React from 'react';
import { ItemList } from '../types/type';
import { randomNumber } from '../utils/utils';
import Button from './CustomButton';

type ListRollProps = {
  itemList: ItemList[];
};

const ListRoll = ({ itemList }: ListRollProps) => {
  const [item, setItem] = React.useState<string>('-');

  const onHandleClick = () => {
    const number: number = randomNumber(0, itemList.length - 1);
    setItem(itemList[number]?.value || 'No character found');
  };

  return (
    <>
      <Button onClick={onHandleClick}>Roll</Button>
      {item && (
        <div className='text-m font-bold text-center border rounded p-2 w-full bg-gray-50'>
          {item}
        </div>
      )}
    </>
  );
};

export default ListRoll;
