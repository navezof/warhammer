import { useEffect, useState } from "react";
import { ItemList } from "../../types/type";
import {
  loadItemsFromLocalStorage,
  storeItemsInLocalStorage,
} from "../../utils/localStorageState";

export const useListState = (
  widgetId: string,
  storageKeySuffix: string,
  initialContent?: ItemList[]
) => {
  const storageKey = `${widgetId}_${storageKeySuffix}`;
  const defaultContent = initialContent || [];

  if (!Array.isArray(initialContent) || initialContent.length === 0)
    initialContent = [];

  const [itemList, setItemList] = useState<ItemList[]>(() => {
    const storedItems = loadItemsFromLocalStorage(storageKey);
    if (Array.isArray(storedItems) && storedItems.length > 0)
      return storedItems;
    return defaultContent;
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
