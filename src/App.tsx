import React from "react";
import { Outlet } from "react-router-dom";
import { RPGToolboxProvider, useRPGToolboxContext } from "./RPGToolboxContext";
import "./app.css";
import Dashboard from "./features/dashboard/Dashboard";
import { DashboardHeader } from "./features/dashboard/DashboardHeader";

const AppContent: React.FC = () => {
  const { dashboards, activeDashboardId } = useRPGToolboxContext();

  const activeDashboard = dashboards.find(
    (dashboard) => dashboard.id === activeDashboardId
  );

  return (
    <div>
      <main>
        <Outlet />
        {activeDashboard && (
          <>
            <DashboardHeader name={activeDashboard.name} />
            <Dashboard
              key={activeDashboard.id}
              id={activeDashboard.id}
              name={activeDashboard.name}
              initialWidgets={activeDashboard.widgets}
            />
          </>
        )}
      </main>
    </div>
  );
};

function App() {
  return (
    <RPGToolboxProvider>
      <AppContent />
    </RPGToolboxProvider>
  );
}

export default App;
