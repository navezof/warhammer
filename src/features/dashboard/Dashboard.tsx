import React, { useEffect } from "react";
import { WidgetItem } from "./WidgetItem";
import { Widget } from "../../types/type";
import { storeItemsInLocalStorage } from "../../utils/localStorageState";
import { useRPGToolboxContext } from "../../RPGToolboxContext";
import { AddNewWidget } from "../addWidget/AddNewWidget";
import { useWidgetDnD } from "../../components/useWidgetDnD";

const DASHBOARD_WIDGET_STORAGE_KEY = "widgets";

const Dashboard: React.FC = () => {
  const { widgets, setWidgets, removeWidget, instanceId } =
    useRPGToolboxContext();

  useEffect(
    () => storeItemsInLocalStorage(widgets, DASHBOARD_WIDGET_STORAGE_KEY),
    [widgets]
  );

  useWidgetDnD({ instanceId, widgets, setWidgets });

  return (
    <div>
      <div className="p-2">
        <div className="grid grid-cols-4 gap-2 auto-rows-[24rem]">
          {widgets.map((widget: Widget) => (
            <WidgetItem
              key={widget.id}
              className="p-2 bg-gray-800 rounded-lg h-full w-full"
              id={widget.id}
              type={widget.type}
              removeWidget={removeWidget}
              src={widget.id}
              instanceId={instanceId}
            ></WidgetItem>
          ))}
        </div>
        <AddNewWidget />
      </div>
    </div>
  );
};

export default Dashboard;
