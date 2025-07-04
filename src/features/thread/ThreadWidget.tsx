import React, { useEffect } from "react";
import ItemListDisplay from "../../components/ItemListDisplay";
import { ItemList } from "../../types/type";
import ListRoll from "../../components/ListRolls";
import {
  loadFromLocalStorage,
  storeItemsInLocalStorage,
} from "../../utils/localStorageState";

const LIST_THREAD_STORAGE_KEY = "listThread";

export const ThreadWidget = () => {
  const [itemList, setItemList] = React.useState<ItemList[]>(
    loadFromLocalStorage(LIST_THREAD_STORAGE_KEY) || [
      { id: 1, value: "Thread 1" },
      { id: 2, value: "Thread 2" },
      { id: 3, value: "Thread 3" },
    ]
  );

  useEffect(() => {
    storeItemsInLocalStorage(itemList, LIST_THREAD_STORAGE_KEY);
  }, [itemList]);

  return (
    <div className="flex flex-col justify-center items-center p-2 space-y-2">
      <ItemListDisplay
        title={"Intrigue"}
        itemList={itemList}
        setItemList={setItemList}
      />
      <ListRoll itemList={itemList} />
    </div>
  );
};
