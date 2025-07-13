import { useRPGToolboxContext } from "../../RPGToolboxContext";
import { WidgetType } from "../../types/type";
import { widgetList } from "./WidgetList";

export const AddNewWidget = () => {
  const { addNew } = useRPGToolboxContext();

  return (
    <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center">
      <select
        className="p-2 bg-gray-50 text-gray-700 rounded border cursor-pointer hover:border-gray-400"
        defaultValue=""
        onChange={(e) => {
          addNew(e.target.value as WidgetType);
          e.target.value = "";
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
