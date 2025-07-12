import { useState } from "react";
import {
  loadItemsFromLocalStorage,
  storeItemsInLocalStorage,
} from "../../utils/localStorageState";
import { RpgIcon } from "../../components/RpgIcon";

const TITLE_STORAGE_KEY = `widget_title`;

type WidgetHeaderProps = {
  id: string;
  type: string;
  removeWidget: (id: string) => void;
};

export const WidgetHeader = ({ id, type, removeWidget }: WidgetHeaderProps) => {
  const storageKey = `${id}_${TITLE_STORAGE_KEY}`;
  const [title, setTitle] = useState<string>(() => {
    const data = loadItemsFromLocalStorage(storageKey);
    return Array.isArray(data) && data.length <= 0 ? type : data;
  });

  const handleTitleChange = (newValue: string) => {
    storeItemsInLocalStorage(newValue, storageKey);
    setTitle(newValue);
  };

  return (
    <div className="flex flex-row text-md font-bold text-white mb-2 space-x-2">
      <input
        type="text"
        value={title}
        onChange={(e) => handleTitleChange(e.target.value)}
        className="w-[99%]"
      />
      <button onClick={() => removeWidget(id)}>
        <RpgIcon iconType={"xmark"} />
      </button>
    </div>
  );
};
