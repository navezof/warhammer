import { useEffect } from "react";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { Widget } from "../types/type";

type UseWidgetDnDProps = {
  instanceId: symbol;
  widgets: Widget[];
  setWidgets: (widgets: Widget[]) => void;
};

export const useWidgetDnD = ({
  instanceId,
  widgets,
  setWidgets,
}: UseWidgetDnDProps) => {
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
  }, [instanceId, widgets, setWidgets]);
};
