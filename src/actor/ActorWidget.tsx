import React, { useEffect } from 'react';
import ItemListDisplay from '../components/ItemListDisplay';
import { ItemList } from '../types/type';
import ListRoll from '../components/ListRolls';
import {
  loadFromLocalStorage,
  storeItemsInLocalStorage,
} from '../utils/localStorageState';

const LIST_ACTOR_STORAGE_KEY = 'listActor';

export const ActorWidget = () => {
  const [itemList, setItemList] = React.useState<ItemList[]>(
    loadFromLocalStorage(LIST_ACTOR_STORAGE_KEY) || [
      { id: 1, value: 'Acteur 1' },
      { id: 2, value: 'Acteur 2' },
      { id: 3, value: 'Acteur 3' },
    ]
  );

  useEffect(() => {
    storeItemsInLocalStorage(itemList, LIST_ACTOR_STORAGE_KEY);
  }, [itemList]);

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
