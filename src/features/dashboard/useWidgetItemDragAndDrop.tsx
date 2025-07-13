import {
  draggable,
  dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import React, { useRef } from "react";
import { useEffect } from "react";
import { Widget } from "../../types/type";

export type State = "idle" | "dragging" | "over";

type UseWidgetItemDragAndDropProps = {
  instanceId: symbol;
  widget: Widget;
};

export const useWidgetItemDragAndDrop = ({
  instanceId,
  widget,
}: UseWidgetItemDragAndDropProps) => {
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

  return { ref, state };
};
