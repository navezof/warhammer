import { useEffect } from "react";
import { storeItemsInLocalStorage } from "../../utils/localStorageState";
import { Widget } from "../../types/type";

const DASHBOARD_WIDGET_STORAGE_KEY = "widgets";

type UseStoreItemsInLocalStorageProps = {
  widgets: Widget[];
};

export const useStoreItemsInLocalStorage = ({
  widgets,
}: UseStoreItemsInLocalStorageProps) => {
  useEffect(
    () => storeItemsInLocalStorage(widgets, DASHBOARD_WIDGET_STORAGE_KEY),
    [widgets]
  );
};
