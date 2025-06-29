import React, { useEffect } from 'react';
import { OracleWidget } from '../oracle/OracleWidget';
import { FateQuestionWidget } from '../fate/FateQuestionWidget';
import { WidgetItem } from './WidgetItem';
import { Widget } from '../../types/type';
import { storeItemsInLocalStorage } from '../../utils/localStorageState';
import {
  RPGToolboxProvider,
  useRPGToolboxContext,
} from '../../RPGToolboxContext';
import { AddNewWidget } from '../addWidget/AddNewWidget';
import { NpcInteractionWidget } from '../npcConversation/NpcConversationWidget';
import { ActorWidget } from '../actor/ActorWidget';
import { Outlet } from 'react-router-dom';
import { Scene } from '../scene/Scene';
import { ThreadWidget } from '../thread/ThreadWidget';

const DASHBOARD_WIDGET_STORAGE_KEY = 'widgets';

const Dashboard: React.FC = () => {
  const { widgets, removeWidget } = useRPGToolboxContext();

  const renderWidget = (widget: Widget) => {
    switch (widget.type) {
      case 'oracle':
        return <OracleWidget widgetId={widget.id} />;
      case 'fate':
        return <FateQuestionWidget />;
      case 'actor':
        return <ActorWidget />;
      case 'npcInteraction':
        return <NpcInteractionWidget />;
      case 'scene':
        return <Scene />;
      case 'thread':
        return <ThreadWidget />;
      default:
        return null;
    }
  };

  useEffect(
    () => storeItemsInLocalStorage(widgets, DASHBOARD_WIDGET_STORAGE_KEY),
    [widgets]
  );

  return (
    <RPGToolboxProvider>
      <div>
        <main>
          <Outlet />
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
            <AddNewWidget />
          </div>
        </main>
      </div>
    </RPGToolboxProvider>
  );
};

export default Dashboard;
