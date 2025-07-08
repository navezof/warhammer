import React, { useEffect } from "react";
import {
  loadFromLocalStorage,
  storeItemsInLocalStorage,
} from "../../utils/localStorageState";
import TableDropdown from "../../components/TableDropdown";
import { namesTable } from "./data/name";
import { Table } from "../../types/type";
import { TableInTooltip } from "../../components/TableInTooltip";
import { RollOnTableIcon } from "../../components/RollOnTableIcon";
import { RollOnAnswer } from "../../components/RollOnAnswer";
import { rollOnTable } from "../../utils/rolls";

const NAME_STORAGE_KEY_SUFFIX = "NAME_STORAGE_KEY_SUFFIX";

type NameWidgetProps = {
  widgetId: string;
};

export const NameWidget = ({ widgetId }: NameWidgetProps) => {
  const [maleNameAnswer, setMaleNameAnswer] = React.useState<string | null>(
    null
  );
  const [femaleNameAnswer, setFemaleNameAnswer] = React.useState<string | null>(
    null
  );
  const [selected, setSelected] = React.useState<Table | null>(
    loadFromLocalStorage(`${widgetId}_${NAME_STORAGE_KEY_SUFFIX}`) || null
  );

  const handleClickOnMaleName = () => {
    if (selected == null) return;
    const name = rollOnTable(selected, 1);
    const familyName = rollOnTable(selected, 3);
    setMaleNameAnswer(`${name} ${familyName}`);
  };

  const handleClickOnFemaleName = () => {
    if (selected == null) return;
    const name = rollOnTable(selected, 2);
    const familyName = rollOnTable(selected, 3);
    setFemaleNameAnswer(`${name} ${familyName}`);
  };

  useEffect(() => {
    if (selected) {
      storeItemsInLocalStorage(
        selected,
        `${widgetId}_${NAME_STORAGE_KEY_SUFFIX}`
      );
    }
  }, [selected]);

  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-row justify-center space-x-2">
        <TableDropdown
          tableOptions={namesTable}
          selected={selected}
          setSelected={setSelected}
        />
        {selected && (
          <TableInTooltip
            text={selected.name}
            table={selected}
            useIcon={true}
          />
        )}
      </div>
      <div className="flex flex-col h-full">
        <div className="flex flex-col justify-center items-center w-full h-full space-y-2">
          <RollOnAnswer
            answer={maleNameAnswer}
            handleClick={handleClickOnMaleName}
            icon="male"
          />
          <RollOnAnswer
            answer={femaleNameAnswer}
            handleClick={handleClickOnFemaleName}
            icon="female"
          />
        </div>
      </div>
    </div>
  );
};
