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

export const loadItemsFromLocalStorage = (ITEM_STORAGE_KEY: string) => {
  try {
    const storedItems = localStorage.getItem(ITEM_STORAGE_KEY);
    return storedItems ? JSON.parse(storedItems) : [];
  } catch (error) {
    console.error(
      `Error loading item with key ${ITEM_STORAGE_KEY} from local storage:`,
      error
    );
    return [];
  }
};
