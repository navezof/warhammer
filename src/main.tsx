import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import CreatureDisplay from './features/creatureGenerator/CreatureDisplay';
import NPCHandler from './features/npcConversation/NPCConversationHandler';
import FateInput from './features/fate/FateInput';
import { FateQuestionWidget } from './features/fate/FateQuestionWidget';
import { OracleWidget } from './features/oracle/OracleWidget';
import { DashboardPage } from './features/dashboard/DashboardPage';
import { AddNewWidget } from './features/addWidget/AddNewWidget';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'v1/fates',
        element: <FateQuestionWidget />,
      },
      {
        path: 'creature',
        element: <CreatureDisplay />,
      },
      {
        path: 'npc',
        element: <NPCHandler />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
