import { useEffect, useState } from "react";
import { ItemList } from "../../types/type";
import {
  loadItemsFromLocalStorage,
  storeItemsInLocalStorage,
} from "../../utils/localStorageState";

const LIST_THREAD_STORAGE_KEY = "listThread";

export const useThreadState = (widgetId: string) => {
  const storageKey = `${String(widgetId)}_${LIST_THREAD_STORAGE_KEY}`;
  const [itemList, setItemList] = useState<ItemList[]>(() => {
    const storedItems = loadItemsFromLocalStorage(storageKey);
    if (!storedItems || storedItems.length === 0) {
      return [
        { id: 1, value: "Thread 1" },
        { id: 2, value: "Thread 2" },
        { id: 3, value: "Thread 3" },
      ];
    }
    return storedItems;
  });

  useEffect(() => {
    storeItemsInLocalStorage(itemList, storageKey);
  }, [itemList, storageKey]);

  useEffect(() => {
    return () => {
      localStorage.removeItem(storageKey);
    };
  }, [storageKey]);

  return [itemList, setItemList] as const;
};
