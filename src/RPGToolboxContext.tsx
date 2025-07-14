import React, { useCallback, useEffect, useState } from "react";
import { createContext, PropsWithChildren, useContext } from "react";
import { Widget } from "./types/type";
import {
  loadItemsFromLocalStorage,
  storeItemsInLocalStorage,
} from "./utils/localStorageState";

export type Dashboard = {
  id: string;
  name: string;
  widgets: Widget[];
};

type RPGToolboxState = {
  instanceId: symbol;

  chaos: number;
  setChaos: (value: number) => void;
  fateAnswer: string;
  setFateAnswer: (value: string) => void;

  dashboards: Dashboard[];
  setDashboards: React.Dispatch<React.SetStateAction<Dashboard[]>>;

  activeDashboardId: string | null;
  setActiveDashboardId: React.Dispatch<React.SetStateAction<string | null>>;

  hasNextDashboard: () => boolean;
  hasPreviousDashboard: () => boolean;
  nextDashboard: () => void;
  previousDashboard: () => void;
};

const DASHBOARDS_STORAGE_KEY = "dashboards";

const RPGToolBoxContext = createContext<RPGToolboxState | null>(null);

export function RPGToolboxProvider({ children }: PropsWithChildren) {
  const [chaos, setChaos] = useState<number>(5);
  const [fateAnswer, setFateAnswer] = React.useState<string>("-");

  const [dashboards, setDashboards] = useState<Dashboard[]>(() => {
    const storedDashboards = loadItemsFromLocalStorage<Dashboard[]>(
      DASHBOARDS_STORAGE_KEY
    );
    return storedDashboards && storedDashboards.length > 0
      ? storedDashboards
      : [{ id: crypto.randomUUID(), name: "My Dashboard", widgets: [] }];
  });

  const [activeDashboardId, setActiveDashboardId] = useState<string | null>(
    () => dashboards[0]?.id || null
  );

  const hasNextDashboard = () => {
    const currentIndex = dashboards.findIndex(
      (dashboard) => dashboard.id === activeDashboardId
    );
    return currentIndex !== dashboards.length - 1;
  };

  const hasPreviousDashboard = () => {
    const currentIndex = dashboards.findIndex(
      (dashboard) => dashboard.id === activeDashboardId
    );
    return currentIndex > 0;
  };

  const nextDashboard = useCallback(() => {
    const currentIndex = dashboards.findIndex(
      (dashboard) => dashboard.id === activeDashboardId
    );

    if (currentIndex === dashboards.length - 1) {
      const newDashboard: Dashboard = {
        id: crypto.randomUUID(),
        name: `Dashboard ${currentIndex + 1}`,
        widgets: [],
      };
      setDashboards((prev) => [...prev, newDashboard]);
      setActiveDashboardId(newDashboard.id);
    } else {
      setActiveDashboardId(dashboards[currentIndex + 1].id);
    }
  }, [activeDashboardId, dashboards, setDashboards, setActiveDashboardId]);

  const previousDashboard = useCallback(() => {
    const currentIndex = dashboards.findIndex(
      (dashboard) => dashboard.id === activeDashboardId
    );

    if (currentIndex === 0) {
      setActiveDashboardId(dashboards[dashboards.length - 1].id);
    } else {
      setActiveDashboardId(dashboards[currentIndex - 1].id);
    }
  }, [activeDashboardId, dashboards, setDashboards, setActiveDashboardId]);

  useEffect(() => {
    storeItemsInLocalStorage(dashboards, DASHBOARDS_STORAGE_KEY);
  }, [dashboards]);

  const instanceId = React.useMemo(() => Symbol("instance-id"), []);

  return (
    <RPGToolBoxContext.Provider
      value={{
        instanceId,
        chaos,
        setChaos,
        fateAnswer,
        setFateAnswer,

        dashboards,
        setDashboards,
        activeDashboardId,
        setActiveDashboardId,

        hasNextDashboard,
        hasPreviousDashboard,
        nextDashboard,
        previousDashboard,
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
