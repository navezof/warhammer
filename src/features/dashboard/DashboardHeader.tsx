import { useState } from "react";
import {
  loadItemsFromLocalStorage,
  storeItemsInLocalStorage,
} from "../../utils/localStorageState";
import { RpgIcon } from "../../components/RpgIcon";
import { useRPGToolboxContext } from "../../RPGToolboxContext";

const DASHBOARD_HEADER_STORAGE_KEY = "dashboard-header";

type DashboardHeaderProps = {
  name: string;
};

export const DashboardHeader = ({ name }: DashboardHeaderProps) => {
  const {
    hasPreviousDashboard,
    hasNextDashboard,
    nextDashboard,
    previousDashboard,
  } = useRPGToolboxContext();

  const [dashboardTitle, setDashboardTitle] = useState<string>(
    loadItemsFromLocalStorage(DASHBOARD_HEADER_STORAGE_KEY) || "My Dashboard"
  );

  console.log(dashboardTitle);

  const handleChangeDashboardTitle = (newValue: string) => {
    setDashboardTitle(newValue);
    storeItemsInLocalStorage(newValue, DASHBOARD_HEADER_STORAGE_KEY);
  };

  return (
    <div className="flex flew-col p-2 bg-gray-800 h-full w-full text-white font-bold text-lg justify-center items-center">
      <button
        onClick={previousDashboard}
        className="inline-flex items-center justify-center w-8 h-8 bg-gray-on"
        title="Previous dashboard"
      >
        {hasPreviousDashboard() ? (
          <RpgIcon iconType={"arrowLeft"} />
        ) : (
          <RpgIcon iconType={"arrowRotateLeft"} />
        )}
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => handleChangeDashboardTitle(e.target.value)}
      />
      <button
        onClick={nextDashboard}
        className="inline-flex items-center justify-center w-8 h-8 bg-gray-on"
        title={hasNextDashboard() ? "Next dashboard" : "Create new dashboard"}
      >
        {hasNextDashboard() ? (
          <RpgIcon iconType={"arrowRight"} />
        ) : (
          <RpgIcon iconType={"penToSquare"} />
        )}
      </button>
    </div>
  );
};
