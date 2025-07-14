import { useState } from "react";
import { WidgetType } from "../../types/type";
import { widgetList } from "./WidgetList";

type AddNewWidgetProps = {
  addNew: (type: WidgetType) => void;
};

export const AddNewWidget = ({ addNew }: AddNewWidgetProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center">
      <select
        className="p-2 bg-gray-50 text-gray-700 rounded border cursor-pointer hover:border-gray-400"
        value={selectedValue}
        defaultValue=""
        onChange={(e) => {
          addNew(e.target.value as WidgetType);
          setSelectedValue("");
        }}
      >
        <option value="" disabled hidden>
          Add a Widget...
        </option>
        {widgetList.map((widget) => (
          <option key={widget.type} value={widget.type}>
            {widget.name}
          </option>
        ))}
      </select>
    </div>
  );
};
