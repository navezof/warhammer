import React, { PropsWithChildren, useEffect, useRef } from "react";
import {
  draggable,
  dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { css, type SerializedStyles } from "@emotion/react";
import { WidgetHeader } from "./WidgetHeader";
import { WidgetType } from "../../types/type";
import { ActorWidget } from "../actor/ActorWidget";
import { FateQuestionWidget } from "../fate/FateQuestionWidget";
import { NameWidget } from "../name/nameWidget";
import { NpcInteractionWidget } from "../npcConversation/NpcConversationWidget";
import { OracleWidget } from "../oracle/OracleWidget";
import { Scene } from "../scene/Scene";
import { ThreadWidget } from "../thread/ThreadWidget";

type WidgetItemComponentProps = PropsWithChildren & {
  src: string;
  id: string;
  type: WidgetType;
  className?: string;
  removeWidget: (id: string) => void;
  instanceId: symbol;
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
      return <ActorWidget />;
    case "npcInteraction":
      return <NpcInteractionWidget />;
    case "scene":
      return <Scene />;
    case "thread":
      return <ThreadWidget />;
    case "name":
      return <NameWidget widgetId={id} />;
    default:
      return null;
  }
};

// High Order Component: a component that wraps another children component
// Allows to add additional functionality to a component without modifying its structure
const WidgetItemComponent = ({
  src,
  id,
  type,
  className = "",
  removeWidget,
  instanceId,
}: WidgetItemComponentProps) => {
  const ref = useRef(null);
  const [state, setState] = React.useState<State>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return combine(
      draggable({
        element: el,
        getInitialData: () => ({ type: "grid-item", src, instanceId }),
        onDragStart: () => setState("dragging"),
        onDrop: () => setState("idle"),
      }),
      dropTargetForElements({
        element: el,
        getData: () => ({ src }),
        getIsSticky: () => true,
        canDrop: ({ source }) =>
          source.data.instanceId === instanceId &&
          source.data.type === "grid-item" &&
          source.data.src !== src,
        onDragEnter: () => setState("over"),
        onDragLeave: () => setState("idle"),
        onDrop: () => setState("idle"),
      })
    );
  }, [instanceId, src]);

  console.log(`Rendering ${type}:${id}`); // This would fire on every Dashboard render
  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      css={itemStateStyles[state]}
    >
      <WidgetHeader id={id} type={type} removeWidget={removeWidget} />
      <div className="pt-2 flex-1 flex flex-col bg-gray-50 h-[90%] p-2 space-y-2">
        {renderWidget(type, id)}
      </div>
    </div>
  );
};

export const WidgetItem = React.memo(WidgetItemComponent);
