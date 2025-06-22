import React from 'react';
import ItemListDisplay from '../components/ItemListDisplay';
import { ItemList } from '../types/type';
import ListRoll from '../components/ListRolls';

export const ActorPage = () => {
  const [itemList, setItemList] = React.useState<ItemList[]>([
    { id: 1, value: 'Acteur 1' },
    { id: 2, value: 'Acteur 2' },
    { id: 3, value: 'Acteur 3' },
  ]);

  return (
    <div className='flex flex-col justify-center items-center bg-gray-50 p-2 space-y-2'>
      <ItemListDisplay
        title={'Acteur'}
        itemList={itemList}
        setItemList={setItemList}
      />
      <ListRoll itemList={itemList} />
    </div>
  );
};
