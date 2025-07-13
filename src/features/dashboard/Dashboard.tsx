import React from "react";
import { WidgetItem } from "./WidgetItem";
import { Widget } from "../../types/type";
import { useRPGToolboxContext } from "../../RPGToolboxContext";
import { AddNewWidget } from "../addWidget/AddNewWidget";
import { useWidgetDnD } from "./useWidgetDnD";
import { useStoreItemsInLocalStorage } from "./useStoreItemsInLocalStorage";

const Dashboard: React.FC = () => {
  const { widgets, setWidgets, removeWidget, instanceId } =
    useRPGToolboxContext();

  useStoreItemsInLocalStorage({ widgets });
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
          <AddNewWidget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
