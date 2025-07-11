import React, { useCallback, useEffect } from "react";
import { createContext, PropsWithChildren, useContext } from "react";
import { Widget, WidgetType } from "./types/type";
import {
  loadItemsFromLocalStorage,
  storeItemsInLocalStorage,
} from "./utils/localStorageState";

type RPGToolboxState = {
  chaos: number;
  setChaos: (value: number) => void;
  fateAnswer: string;
  setFateAnswer: (value: string) => void;

  widgets: Widget[];
  setWidgets: React.Dispatch<React.SetStateAction<Widget[]>>;
  addNew: (type: WidgetType) => void;
  removeWidget: (id: string) => void;

  instanceId: symbol;
};

const DASHBOARD_WIDGET_STORAGE_KEY = "widgets";
const RPGToolBoxContext = createContext<RPGToolboxState | null>(null);

export function RPGToolboxProvider({ children }: PropsWithChildren) {
  const [chaos, setChaos] = React.useState<number>(5);
  const [fateAnswer, setFateAnswer] = React.useState<string>("-");
  const [widgets, setWidgets] = React.useState<Widget[]>(
    loadItemsFromLocalStorage(DASHBOARD_WIDGET_STORAGE_KEY) || []
  );

  const instanceId = React.useMemo(() => Symbol("instance-id"), []);

  const addNew = useCallback((type: WidgetType) => {
    const newWidget: Widget = {
      id: crypto.randomUUID(),
      type,
    };
    setWidgets((prev: Widget[]) => [...prev, newWidget]);
  }, []);

  const removeWidget = useCallback((id: string) => {
    setWidgets((prev: Widget[]) =>
      prev.filter((widget: Widget) => widget.id !== id)
    );
  }, []);

  useEffect(() => {
    storeItemsInLocalStorage(widgets, DASHBOARD_WIDGET_STORAGE_KEY);
  }, [widgets]);

  return (
    <RPGToolBoxContext.Provider
      value={{
        chaos,
        setChaos,
        fateAnswer,
        setFateAnswer,
        widgets,
        setWidgets,
        addNew,
        removeWidget,
        instanceId,
      }}
    >
      {children}
    </RPGToolBoxContext.Provider>
  );
}

export function useRPGToolboxContext() {
  const rpgToolboxContext = useContext(RPGToolBoxContext);
  if (!rpgToolboxContext)
    throw new Error("useRPGToolbox must be used in <RPGToolboxProvider>");
  return rpgToolboxContext;
}
