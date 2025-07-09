import React, { useEffect, useState } from "react";
import { WidgetItem } from "./WidgetItem";
import { Widget } from "../../types/type";
import { storeItemsInLocalStorage } from "../../utils/localStorageState";
import { useRPGToolboxContext } from "../../RPGToolboxContext";
import { AddNewWidget } from "../addWidget/AddNewWidget";
import { Outlet } from "react-router-dom";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

const DASHBOARD_WIDGET_STORAGE_KEY = "widgets";

const Dashboard: React.FC = () => {
  const { widgets, setWidgets, removeWidget, instanceId } =
    useRPGToolboxContext();

  useEffect(
    () => storeItemsInLocalStorage(widgets, DASHBOARD_WIDGET_STORAGE_KEY),
    [widgets]
  );

  useEffect(() => {
    return monitorForElements({
      canMonitor({ source }) {
        return source.data.instanceId === instanceId;
      },
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0];
        if (!destination) {
          console.log("No destination");
          return;
        }
        const destinationSrc = destination.data.src;
        const startSrc = source.data.src;

        if (typeof destinationSrc !== "string") {
          return;
        }
        if (typeof startSrc !== "string") {
          return;
        }

        const updated = [...widgets];
        const startIndex = widgets.findIndex((w) => w.id === startSrc);
        const destIndex = widgets.findIndex((w) => w.id === destinationSrc);
        if (startIndex !== -1 && destIndex !== -1) {
          const temp = updated[startIndex];
          updated[startIndex] = updated[destIndex];
          updated[destIndex] = temp;
        }

        setWidgets(updated);
      },
    });
  }, [instanceId, widgets]);

  return (
    <div>
      <main>
        <Outlet />
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
      </main>
    </div>
  );
};

export default Dashboard;
