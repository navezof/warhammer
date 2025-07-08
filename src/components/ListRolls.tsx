import React from "react";
import { ItemList } from "../types/type";
import { randomNumber } from "../utils/utils";
import { RollOnAnswer } from "./RollOnAnswer";

type ListRollProps = {
  itemList: ItemList[];
};

const ListRoll = ({ itemList }: ListRollProps) => {
  const [item, setItem] = React.useState<string | null>(null);

  const onHandleClick = () => {
    const number: number = randomNumber(0, itemList.length - 1);
    setItem(itemList[number]?.value || "No item found");
  };

  return <RollOnAnswer answer={item} handleClick={onHandleClick} icon="dice" />;
};

export default ListRoll;
