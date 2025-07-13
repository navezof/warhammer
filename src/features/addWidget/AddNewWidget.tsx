import { useRPGToolboxContext } from "../../RPGToolboxContext";
import { WidgetType } from "../../types/type";

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
        <option value="oracle">Oracle</option>
        <option value="fate">Destin</option>
        <option value="actor">Acteur</option>
        <option value="thread">Intrigue</option>
        <option value="npcInteraction">Interaction PNJ</option>
        <option value="scene">Scène</option>
        <option value="name">Noms</option>
        <option value="npcGenerator">Crée un PNJ</option>
      </select>
    </div>
  );
};
