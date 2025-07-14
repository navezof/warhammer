import { useEffect, useState } from "react";
import { RpgIcon } from "../../components/RpgIcon";
import { useRPGToolboxContext } from "../../RPGToolboxContext";

type DashboardHeaderProps = {
  id: string;
  name: string;
};

export const DashboardHeader = ({ id, name }: DashboardHeaderProps) => {
  const {
    setDashboards,
    hasPreviousDashboard,
    hasNextDashboard,
    nextDashboard,
    previousDashboard,
    deleteDashboard,
  } = useRPGToolboxContext();

  const [dashboardTitle, setDashboardTitle] = useState<string>(name);

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

  return (
    <div className="flex p-2 bg-gray-800 h-full w-full text-white font-bold text-lg justify-center items-center">
      {hasPreviousDashboard() && (
        <button
          onClick={previousDashboard}
          className="inline-flex items-center justify-center w-8 h-8 bg-gray-on"
          title="Previous dashboard"
        >
          <RpgIcon iconType={"arrowLeft"} />
        </button>
      )}
      <input
        type="text"
        value={dashboardTitle}
        onChange={(e) => handleChangeDashboardTitle(e.target.value)}
      />
      <button
        onClick={deleteDashboard}
        className="inline-flex items-center justify-center w-8 h-8 bg-gray-on"
        title="Delete dashboard"
      >
        <RpgIcon iconType={"xmark"} />
      </button>
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
