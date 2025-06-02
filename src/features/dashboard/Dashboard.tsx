import React, { useEffect } from 'react';
import { useState } from 'react';
import { OracleV1Page } from '../../pages/OracleV1Page';
import { FateQuestionV1Page } from '../../pages/FateQuestionV1Page';
import { WidgetItem } from './WidgetItem';
import { Widget, WidgetType } from '../../types/type';
import {
  loadFromLocalStorage,
  storeItemsInLocalStorage,
} from '../../utils/localStorageState';

const DASHBOARD_WIDGET_STORAGE_KEY = 'widgets';

const Dashboard: React.FC = () => {
  const [widgets, setWidgets] = useState<Widget[]>(
    loadFromLocalStorage(DASHBOARD_WIDGET_STORAGE_KEY) || []
  );

  const addWidget = (type: WidgetType) => {
    const newWidget: Widget = {
      id: crypto.randomUUID(),
      type,
    };
    setWidgets((prev: Widget[]) => [...prev, newWidget]);
  };

  const removeWidget = (id: string) => {
    setWidgets((prev: Widget[]) =>
      prev.filter((widget: Widget) => widget.id !== id)
    );
  };

  const renderWidget = (widget: Widget) => {
    switch (widget.type) {
      case 'oracle':
        return <OracleV1Page />;
      case 'fate':
        return <FateQuestionV1Page />;
      default:
        return null;
    }
  };

  useEffect(
    () => storeItemsInLocalStorage(widgets, DASHBOARD_WIDGET_STORAGE_KEY),
    [widgets]
  );

  return (
    <div>
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
        <option value='fate'>Fate</option>
      </select>
      <div>
        {widgets.map((widget: Widget) => (
          <WidgetItem
            key={widget.id}
            id={widget.id}
            removeWidget={removeWidget}
          >
            {renderWidget(widget)}
          </WidgetItem>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
