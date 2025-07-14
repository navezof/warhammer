import { useEffect } from "react";
import { storeItemsInLocalStorage } from "../../utils/localStorageState";
import { Widget } from "../../types/type";

const DASHBOARD_WIDGET_STORAGE_KEY = "widgets";

type UseStoreItemsInLocalStorageProps = {
  dashboardId: string;
  widgets: Widget[];
};

export const useStoreItemsInLocalStorage = ({
  dashboardId,
  widgets,
}: UseStoreItemsInLocalStorageProps) => {
  const dashboardWidgetsListStorageKey = `${dashboardId}_${DASHBOARD_WIDGET_STORAGE_KEY}`;

  useEffect(
    () => storeItemsInLocalStorage(widgets, dashboardWidgetsListStorageKey),
    [widgets]
  );
};
