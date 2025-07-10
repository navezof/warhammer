import { useState } from "react";
import {
  loadItemsFromLocalStorage,
  storeItemsInLocalStorage,
} from "../../utils/localStorageState";

const DASHBOARD_HEADER_STORAGE_KEY = "dashboard-header";

export const DashboardHeader = () => {
  const [dashboardTitle, setDashboardTitle] = useState<string>(
    loadItemsFromLocalStorage(DASHBOARD_HEADER_STORAGE_KEY) || "My Dashboard"
  );

  const handleChangeDashboardTitle = (newValue: string) => {
    setDashboardTitle(newValue);
    storeItemsInLocalStorage(newValue, DASHBOARD_HEADER_STORAGE_KEY);
  };

  return (
    //
    <div className="flex flew-col p-2 bg-gray-800 h-full w-full text-white font-bold text-lg justify-center items-center">
      <input
        type="text"
        value={dashboardTitle}
        onChange={(e) => handleChangeDashboardTitle(e.target.value)}
      />
    </div>
  );
};
