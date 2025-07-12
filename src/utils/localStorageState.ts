export const storeItemsInLocalStorage = <T>(
  items: T,
  ITEM_STORAGE_KEY: string
) => {
  try {
    localStorage.setItem(ITEM_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error(
      `Error storing item with key ${ITEM_STORAGE_KEY} to local storage:`,
      error
    );
  }
};

export const loadItemsFromLocalStorage = <T>(
  ITEM_STORAGE_KEY: string
): T | null => {
  try {
    const storedItems = localStorage.getItem(ITEM_STORAGE_KEY);
    if (storedItems === null) return null;
    return JSON.parse(storedItems) as T;
  } catch (error) {
    console.error(
      `Error loading item with key ${ITEM_STORAGE_KEY} from local storage:`,
      error
    );
    return null;
  }
};
