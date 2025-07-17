import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createContext, PropsWithChildren, useContext } from "react";
import { Table, Widget } from "./types/type";
import {
  loadItemsFromLocalStorage,
  storeItemsInLocalStorage,
} from "./utils/localStorageState";
import { DataLoader } from "./utils/dataLoader";

export type Dashboard = {
  id: string;
  name: string;
  widgets: Widget[];
};

type RPGToolboxState = {
  instanceId: symbol;

  tableData: Table[] | null;
  setTableData: React.Dispatch<React.SetStateAction<Table[] | null>>;

  dashboards: Dashboard[];
  setDashboards: React.Dispatch<React.SetStateAction<Dashboard[]>>;

  activeDashboardId: string | null;
  setActiveDashboardId: React.Dispatch<React.SetStateAction<string | null>>;

  hasNextDashboard: () => boolean;
  hasPreviousDashboard: () => boolean;
  nextDashboard: () => void;
  previousDashboard: () => void;

  deleteDashboard: () => void;
};

const DASHBOARDS_STORAGE_KEY = "dashboards";
const ACTIVE_DASHBOARD_ID_STORAGE_KEY = "activeDashboardId";

const RPGToolBoxContext = createContext<RPGToolboxState | null>(null);

export function RPGToolboxProvider({ children }: PropsWithChildren) {
  const dataLoader = useMemo(() => {
    const loader = DataLoader();
    loader.loadData();
    return loader;
  }, []);

  const [tableData, setTableData] = useState<Table[] | null>(() =>
    dataLoader.getAll()
  );

  const [dashboards, setDashboards] = useState<Dashboard[]>(() => {
    const storedDashboards = loadItemsFromLocalStorage<Dashboard[]>(
      DASHBOARDS_STORAGE_KEY
    );
    return storedDashboards && storedDashboards.length > 0
      ? storedDashboards
      : [{ id: crypto.randomUUID(), name: "My Dashboard", widgets: [] }];
  });

  const [activeDashboardId, setActiveDashboardId] = useState<string | null>(
    () => {
      const storedId = loadItemsFromLocalStorage<string>(
        ACTIVE_DASHBOARD_ID_STORAGE_KEY
      );
      if (storedId && dashboards.some((dashboard) => dashboard.id === storedId))
        return storedId;
      return dashboards[0]?.id || null;
    }
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

  const deleteDashboard = useCallback(() => {
    if (!activeDashboardId) return;

    let newActiveDashboardId: string | null;

    const currentIndex = dashboards.findIndex(
      (dashboard) => dashboard.id === activeDashboardId
    );

    if (dashboards[currentIndex + 1])
      newActiveDashboardId = dashboards[currentIndex + 1].id;
    else if (dashboards[currentIndex - 1])
      newActiveDashboardId = dashboards[currentIndex - 1].id;
    else {
      const newDashboard: Dashboard = {
        id: crypto.randomUUID(),
        name: `Dashboard ${currentIndex + 1}`,
        widgets: [],
      };
      setActiveDashboardId(newDashboard.id);
      setDashboards([newDashboard]);
      return;
    }
    setDashboards((prev) => prev.filter((d) => d.id !== activeDashboardId));
    setActiveDashboardId(newActiveDashboardId);
    storeItemsInLocalStorage(
      newActiveDashboardId,
      ACTIVE_DASHBOARD_ID_STORAGE_KEY
    );
  }, [activeDashboardId, dashboards, setDashboards, setActiveDashboardId]);

  useEffect(() => {
    storeItemsInLocalStorage(dashboards, DASHBOARDS_STORAGE_KEY);
  }, [dashboards]);

  useEffect(() => {
    storeItemsInLocalStorage(
      activeDashboardId,
      ACTIVE_DASHBOARD_ID_STORAGE_KEY
    );
  }, [activeDashboardId]);

  const instanceId = React.useMemo(() => Symbol("instance-id"), []);

  return (
    <RPGToolBoxContext.Provider
      value={{
        instanceId,

        tableData,
        setTableData,

        dashboards,
        setDashboards,
        activeDashboardId,
        setActiveDashboardId,

        hasNextDashboard,
        hasPreviousDashboard,
        nextDashboard,
        previousDashboard,

        deleteDashboard,
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
