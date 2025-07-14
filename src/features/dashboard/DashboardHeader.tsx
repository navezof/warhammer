import { useEffect, useRef, useState } from "react";
import { RpgIcon } from "../../components/RpgIcon";
import { useRPGToolboxContext } from "../../RPGToolboxContext";

type DashboardHeaderProps = {
  id: string;
  name: string;
};

export const DashboardHeader = ({ id, name }: DashboardHeaderProps) => {
  const {
    dashboards,
    setDashboards,
    setActiveDashboardId,
    hasPreviousDashboard,
    hasNextDashboard,
    nextDashboard,
    previousDashboard,
    deleteDashboard,
  } = useRPGToolboxContext();

  const [dashboardTitle, setDashboardTitle] = useState<string>(name);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, setDropdownOpen]);

  useEffect(() => {
    setDashboardTitle(name);
  }, [name]);

  const handleChangeDashboardTitle = (newValue: string) => {
    setDashboardTitle(newValue);
    setDashboards((dashboards) =>
      dashboards.map((dashboard) =>
        dashboard.id === id ? { ...dashboard, name: newValue } : dashboard
      )
    );
  };

  const renderTitleInput = () => {
    if (isDropdownOpen) return;
    return (
      <input
        type="text"
        value={dashboardTitle}
        onChange={(e) => handleChangeDashboardTitle(e.target.value)}
      />
    );
  };

  const renderDropdownMenu = () => {
    if (!isDropdownOpen) return null;
    return (
      <div
        ref={dropdownRef}
        className="absolute top-full right-0 mt-2 w-56 bg-gray-700 rounded-md shadow-lg z-10 text-sm font-normal"
      >
        <div className="p-2">
          <label
            htmlFor="dashboard-select"
            className="block text-xs font-medium text-gray-300"
          >
            Switch Dashboard
          </label>
          <select
            id="dashboard-select"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-600 bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={id}
            onChange={(e) => {
              setActiveDashboardId(e.target.value);
              setDropdownOpen(false);
            }}
          >
            {dashboards.map((dashboard) => (
              <option key={dashboard.id} value={dashboard.id}>
                {dashboard.name}
              </option>
            ))}
          </select>
        </div>
        <div className="border-t border-gray-600" />
        <div className="py-1">
          <button
            onClick={() => {
              deleteDashboard();
              setDropdownOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-600"
            disabled={dashboards.length <= 1}
          >
            <RpgIcon iconType={"xmark"} />
            <span className="ml-2">Delete Dashboard</span>
          </button>
        </div>
      </div>
    );
  };

  const renderPreviousDashboardButton = () => {
    if (!hasPreviousDashboard()) return;
    return (
      <button
        onClick={previousDashboard}
        className="inline-flex items-center justify-center w-8 h-8 bg-gray-on"
        title="Previous dashboard"
      >
        <RpgIcon iconType={"arrowLeft"} />
      </button>
    );
  };

  const renderNextDashboardButton = () => {
    return (
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
    );
  };

  const renderDropdownMenuButton = () => {
    return (
      <div className="relative">
        <button onClick={() => setDropdownOpen((prev) => !prev)}>
          <RpgIcon iconType={"bars"} />
        </button>
        {renderDropdownMenu()}
      </div>
    );
  };

  return (
    <div className="flex flex-row space-x-2 p-2 bg-gray-800 h-full w-full text-white font-bold text-lg justify-center items-center">
      {renderPreviousDashboardButton()}
      {renderTitleInput()}
      {renderDropdownMenuButton()}
      {renderNextDashboardButton()}
    </div>
  );
};
