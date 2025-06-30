import React, { useEffect } from "react";
import { createContext, PropsWithChildren, useContext } from "react";
import { Widget, WidgetType } from "./types/type";
import {
  loadFromLocalStorage,
  storeItemsInLocalStorage,
} from "./utils/localStorageState";

type RPGToolboxState = {
  chaos: number;
  setChaos: (value: number) => void;
  fateAnswer: string;
  setFateAnswer: (value: string) => void;

  widgets: Widget[];
  addNew: (type: WidgetType) => void;
  removeWidget: (id: string) => void;
};

const DASHBOARD_WIDGET_STORAGE_KEY = "widgets";
const RPGToolBoxContext = createContext<RPGToolboxState | null>(null);

export function RPGToolboxProvider({ children }: PropsWithChildren) {
  const [chaos, setChaos] = React.useState<number>(5);
  const [fateAnswer, setFateAnswer] = React.useState<string>("-");
  const [widgets, setWidgets] = React.useState<Widget[]>(
    loadFromLocalStorage(DASHBOARD_WIDGET_STORAGE_KEY) || []
  );

  const addNew = (type: WidgetType) => {
    const newWidget: Widget = {
      id: crypto.randomUUID(),
      type,
    };
    setWidgets((prev: Widget[]) => [...prev, newWidget]);
  };

  const removeWidget = (id: string) => {
    setWidgets((prev: Widget[]) =>
      prev.filter((widget: Widget) => widget.id !== id)
    );
  };

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
        addNew,
        removeWidget,
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
