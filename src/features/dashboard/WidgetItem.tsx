import React, { PropsWithChildren, useEffect, useRef } from "react";
import {
  draggable,
  dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { css, type SerializedStyles } from "@emotion/react";
import { WidgetHeader } from "./WidgetHeader";
import { Widget, WidgetType } from "../../types/type";
import { FateQuestionWidget } from "../fate/FateQuestionWidget";
import { NameWidget } from "../name/nameWidget";
import { NpcInteractionWidget } from "../npcConversation/NpcConversationWidget";
import { OracleWidget } from "../oracle/OracleWidget";
import { Scene } from "../scene/Scene";
import { ThreadWidget } from "../list/ThreadWidget";
import { ActorWidget } from "../list/ActorWidget";
import { NpcGeneratorWidget } from "../npcGenerator/NpcGeneratorWidget";

type WidgetItemComponentProps = PropsWithChildren & {
  instanceId: symbol;
  className?: string;
  widget: Widget;
  removeWidget: (id: string) => void;
};

type State = "idle" | "dragging" | "over";

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

const renderWidget = (type: WidgetType, id: string) => {
  switch (type) {
    case "oracle":
      return <OracleWidget widgetId={id} />;
    case "fate":
      return <FateQuestionWidget />;
    case "actor":
      return <ActorWidget widgetId={id} />;
    case "npcInteraction":
      return <NpcInteractionWidget />;
    case "scene":
      return <Scene />;
    case "thread":
      return <ThreadWidget widgetId={id} />;
    case "name":
      return <NameWidget widgetId={id} />;
    case "npcGenerator":
      return <NpcGeneratorWidget />;
    default:
      return null;
  }
};

// High Order Component: a component that wraps another children component
// Allows to add additional functionality to a component without modifying its structure
const WidgetItemComponent = ({
  instanceId,
  className = "",
  widget,
  removeWidget,
}: WidgetItemComponentProps) => {
  const ref = useRef(null);
  const [state, setState] = React.useState<State>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return combine(
      draggable({
        element: el,
        getInitialData: () => ({
          type: "grid-item",
          src: widget.id,
          instanceId,
        }),
        onDragStart: () => setState("dragging"),
        onDrop: () => setState("idle"),
      }),
      dropTargetForElements({
        element: el,
        getData: () => ({ src: widget.id }),
        getIsSticky: () => true,
        canDrop: ({ source }) =>
          source.data.instanceId === instanceId &&
          source.data.type === "grid-item" &&
          source.data.src !== widget.id,
        onDragEnter: () => setState("over"),
        onDragLeave: () => setState("idle"),
        onDrop: () => setState("idle"),
      })
    );
  }, [instanceId, widget.id]);

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
        {renderWidget(widget.type, widget.id)}
      </div>
    </div>
  );
};

export const WidgetItem = React.memo(WidgetItemComponent);
