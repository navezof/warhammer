import React, { PropsWithChildren } from "react";
import { css, type SerializedStyles } from "@emotion/react";
import { WidgetHeader } from "./WidgetHeader";
import { Widget } from "../../types/type";
import { widgetMap } from "../addWidget/WidgetList";
import { State, useWidgetItemDragAndDrop } from "./useWidgetItemDragAndDrop";

type WidgetItemComponentProps = PropsWithChildren & {
  instanceId: symbol;
  className?: string;
  widget: Widget;
  removeWidget: (id: string) => void;
};

const itemStateStyles: { [Key in State]: undefined | SerializedStyles } = {
  idle: css({
    ":hover": {
      boxShadow: "elevation.shadow.overlay",
    },
  }),
  dragging: css({
    filter: "opacity(0.8)",
  }),
  over: css({
    transform: "translateY(10px)",
    filter: "brightness(1.15)",
    boxShadow: "10px 5px 5px 5px grey",
  }),
};

const WidgetItemComponent = ({
  instanceId,
  className = "",
  widget,
  removeWidget,
}: WidgetItemComponentProps) => {
  const widgetDefinition = widgetMap.get(widget.type);
  if (!widgetDefinition)
    return <div>Error: Widget type {widget.type} not found</div>;
  const WidgetComponent = widgetDefinition.component;

  const { ref, state } = useWidgetItemDragAndDrop({ instanceId, widget });

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      css={itemStateStyles[state]}
    >
      <WidgetHeader
        id={widget.id}
        type={widget.type}
        removeWidget={removeWidget}
      />
      <div className="pt-2 flex-1 flex flex-col bg-gray-50 h-[90%] p-2 space-y-2">
        <WidgetComponent widgetId={widget.id} />
      </div>
    </div>
  );
};

export const WidgetItem = React.memo(WidgetItemComponent);
