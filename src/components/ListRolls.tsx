import React from 'react';
import { ItemList } from '../types/type';
import { randomNumber } from '../utils/utils';

type ListRollProps = {
  name: string;
  itemList: ItemList[];
};

const ListRoll = ({ name, itemList }: ListRollProps) => {
  const [character, setCharacter] = React.useState<string>('');

  const onHandleClick = () => {
    const number: number = randomNumber(0, itemList.length - 1);
    setCharacter(itemList[number]?.value || 'No character found');
  };

  return (
    <>
      <h2>{name}</h2>
      <button onClick={onHandleClick}>Roll on Character List</button>
      {character && <p>{character}</p>}
    </>
  );
};

export default ListRoll;
