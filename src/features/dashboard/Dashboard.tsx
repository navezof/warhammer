import React, { useEffect } from 'react';
import { OracleV1Page } from '../../pages/OracleV1Page';
import { FateQuestionV1Page } from '../../pages/FateQuestionV1Page';
import { WidgetItem } from './WidgetItem';
import { Widget } from '../../types/type';
import { storeItemsInLocalStorage } from '../../utils/localStorageState';
import { useRPGToolboxContext } from '../../RPGToolboxContext';
import { AddWidgetV1Page } from '../../pages/AddWidgetV1Page';
import { ActorPage } from '../../pages/ActorPage';
import { NpcInteractionWidget } from '../../pages/NpcConversationWidget';

const DASHBOARD_WIDGET_STORAGE_KEY = 'widgets';

const Dashboard: React.FC = () => {
  const { widgets, removeWidget } = useRPGToolboxContext();

  const renderWidget = (widget: Widget) => {
    switch (widget.type) {
      case 'oracle':
        return <OracleV1Page widgetId={widget.id} />;
      case 'fate':
        return <FateQuestionV1Page />;
      case 'actor':
        return <ActorPage />;
      case 'npcInteraction':
        return <NpcInteractionWidget />;
      default:
        return null;
    }
  };

  useEffect(
    () => storeItemsInLocalStorage(widgets, DASHBOARD_WIDGET_STORAGE_KEY),
    [widgets]
  );

  return (
    <div className='p-4'>
      <div className='grid grid-cols-3 auto-rows-fr gap-4 md:auto-cols-fr'>
        {widgets.map((widget: Widget) => (
          <WidgetItem
            key={widget.id}
            id={widget.id}
            type={widget.type}
            removeWidget={removeWidget}
          >
            {renderWidget(widget)}
          </WidgetItem>
        ))}
      </div>
      <AddWidgetV1Page />
    </div>
  );
};

export default Dashboard;
