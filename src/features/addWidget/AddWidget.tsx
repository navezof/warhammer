import React from 'react';
import { useRPGToolboxContext } from '../../RPGToolboxContext';
import { WidgetType } from '../../types/type';

export const AddWidget = () => {
  const { addWidget } = useRPGToolboxContext();

  return (
    <select
      className='p-2 text-gray-700 rounded border cursor-pointer hover:border-gray-400'
      defaultValue=''
      onChange={(e) => {
        addWidget(e.target.value as WidgetType);
        e.target.value = '';
      }}
    >
      <option value='' disabled hidden>
        Add a Widget...
      </option>
      <option value='oracle'>Oracle</option>
      <option value='fate'>Destin</option>
    </select>
  ); //return <Button onClick={() => addWidget}>Add</Button>;
};
