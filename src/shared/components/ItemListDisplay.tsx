import React from 'react';
import { ItemList } from '../../types/type';

type ItemListDisplayProps = {
  name: string;
  itemList: ItemList[];
  setItemList: (newItemList: ItemList[]) => void;
};

const ItemListDisplay = ({
  name,
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
      value: '',
    };

    setItemList([...itemList, newItem]);
  };

  const handleRemoveCharacter = (idToRemove: number) => {
    setItemList(itemList.filter((item) => item.id !== idToRemove));
  };

  return (
    <>
      <div>
        <h2>{name}</h2>
        {itemList.map((item) => (
          <div key={item.id}>
            <input
              type='text'
              value={item.value}
              onChange={(e) => handleChange(item.id, e.target.value)}
            />
            <button onClick={() => handleRemoveCharacter(item.id)}>
              Remove
            </button>
          </div>
        ))}
        <button onClick={handleAddCharacter}>Add Character</button>
      </div>
    </>
  );
};

export default ItemListDisplay;
