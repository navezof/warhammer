import React, { useEffect } from "react";
import { OracleWidget } from "../oracle/OracleWidget";
import { FateQuestionWidget } from "../fate/FateQuestionWidget";
import { WidgetItem } from "./WidgetItem";
import { Widget } from "../../types/type";
import { storeItemsInLocalStorage } from "../../utils/localStorageState";
import { useRPGToolboxContext } from "../../RPGToolboxContext";
import { AddNewWidget } from "../addWidget/AddNewWidget";
import { NpcInteractionWidget } from "../npcConversation/NpcConversationWidget";
import { ActorWidget } from "../actor/ActorWidget";
import { Outlet } from "react-router-dom";
import { Scene } from "../scene/Scene";
import { ThreadWidget } from "../thread/ThreadWidget";

const DASHBOARD_WIDGET_STORAGE_KEY = "widgets";

const Dashboard: React.FC = () => {
  const { widgets, removeWidget } = useRPGToolboxContext();

  const renderWidget = (widget: Widget) => {
    console.log("Rendering widget:", widget);
    switch (widget.type) {
      case "oracle":
        return <OracleWidget widgetId={widget.id} />;
      case "fate":
        return <FateQuestionWidget />;
      case "actor":
        return <ActorWidget />;
      case "npcInteraction":
        return <NpcInteractionWidget />;
      case "scene":
        return <Scene />;
      case "thread":
        return <ThreadWidget />;
      default:
        return null;
    }
  };

  useEffect(
    () => storeItemsInLocalStorage(widgets, DASHBOARD_WIDGET_STORAGE_KEY),
    [widgets]
  );

  return (
    <div>
      <main>
        <Outlet />
        <div className="p-4">
          <div className="grid grid-cols-4 gap-2 auto-rows-[16-rem]">
            {widgets.map((widget: Widget) => (
              <WidgetItem
                key={widget.id}
                className="p-2 bg-gray-800 rounded-lg max-h-[400px] h-full w-full"
                id={widget.id}
                type={widget.type}
                removeWidget={removeWidget}
              >
                {renderWidget(widget)}
              </WidgetItem>
            ))}
          </div>
          <AddNewWidget />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
