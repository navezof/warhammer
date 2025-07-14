import React, { useCallback, useEffect, useState } from "react";
import { WidgetItem } from "./WidgetItem";
import { Widget, WidgetType } from "../../types/type";
import { useRPGToolboxContext } from "../../RPGToolboxContext";
import { AddNewWidget } from "../addWidget/AddNewWidget";
import { useWidgetDnD } from "./useWidgetDnD";

type DashboardProps = {
  id: string;
  name: string;
  initialWidgets: Widget[];
};

const Dashboard: React.FC<DashboardProps> = ({
  id: dashboardId,
  initialWidgets,
}: DashboardProps) => {
  const { instanceId, setDashboards } = useRPGToolboxContext();
  const [widgets, setWidgets] = useState<Widget[]>(initialWidgets);

  useEffect(() => {
    setDashboards((prevDashboard) =>
      prevDashboard.map((dashboard) =>
        dashboard.id === dashboardId ? { ...dashboard, widgets } : dashboard
      )
    );
  }, [widgets, dashboardId, setDashboards]);

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

  useWidgetDnD({ instanceId, widgets, setWidgets });

  return (
    <div>
      <div className="p-2">
        <div className="grid grid-cols-4 gap-2 auto-rows-[24rem]">
          {widgets.map((widget: Widget) => (
            <WidgetItem
              key={widget.id}
              instanceId={instanceId}
              className="p-2 bg-gray-800 rounded-lg h-full w-full"
              widget={widget}
              removeWidget={removeWidget}
            ></WidgetItem>
          ))}
          <AddNewWidget addNew={addNew} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
