import React from "react";
import { ItemList } from "../types/type";
import Button from "./CustomButton";

type ItemListDisplayProps = {
  title: string;
  itemList: ItemList[];
  setItemList: (newItemList: ItemList[]) => void;
};

const ItemListDisplay = ({
  title,
  itemList,
  setItemList,
}: ItemListDisplayProps) => {
  const handleChange = (id: number, newValue: string) => {
    // Check if the item with the given id already exists
    if (!itemList.some((item) => item.id === id)) {
      return;
    }
    const updatedItem = itemList.map((item) =>
      item.id === id ? { ...item, value: newValue } : item
    );
    setItemList(updatedItem);
  };

  const handleAddCharacter = () => {
    const newItem: ItemList = {
      id: itemList.length > 0 ? itemList[itemList.length - 1].id + 1 : 1,
      value: "",
    };

    setItemList([...itemList, newItem]);
  };

  const handleRemoveCharacter = (idToRemove: number) => {
    setItemList(itemList.filter((item) => item.id !== idToRemove));
  };

  return (
    <div className="w-full ">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="overflow-y-auto max-h-[200px]">
        <table className="table-auto w-full border border-gray-300">
          <tbody>
            {itemList.map((item) => (
              <tr key={item.id}>
                <td className="px-2 py-1 border-b text-sm">
                  <div className="flex justify-between items-center">
                    <input
                      type="text"
                      value={item.value}
                      onChange={(e) => handleChange(item.id, e.target.value)}
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemoveCharacter(item.id)}
                    >
                      X
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            <td className="px-2 py-1 border-b">
              <Button onClick={handleAddCharacter}>+</Button>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemListDisplay;
