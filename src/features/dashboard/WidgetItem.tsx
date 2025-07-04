import React, { PropsWithChildren } from "react";
import Button from "../../components/CustomButton";

type WidgetItemProps = PropsWithChildren & {
  id: string;
  type: string;
  className?: string;
  removeWidget: (id: string) => void;
};

// High Order Component: a component that wraps another children component
// Allows to add additional functionality to a component without modifying its structure
export const WidgetItem = ({
  children,
  id,
  type,
  className = "",
  removeWidget,
}: WidgetItemProps) => {
  return (
    <div className={`relative ${className}`}>
      <header className="text-md font-bold text-white mb-2">{type}</header>
      <div className="pt-2 flex-1 flex flex-col bg-gray-50 h-[90%] p-2 space-y-2">
        {children}
      </div>
      <div className="top-2 absolute right-2">
        <Button onClick={() => removeWidget(id)} className="!p-2" size="sm">
          X
        </Button>
      </div>
    </div>
  );
};
