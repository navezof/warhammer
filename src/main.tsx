import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import CreatureDisplay from './features/creatureGenerator/CreatureDisplay';
import NPCHandler from './features/npcConversation/NPCConversationHandler';
import FateInput from './features/fate/FateInput';
import { FateQuestionV1Page } from './pages/FateQuestionV1Page';
import { OracleV1Page } from './pages/OracleV1Page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'v1/fates',
        element: <FateQuestionV1Page />,
      },
      {
        path: 'v1/oracles',
        element: <OracleV1Page />,
      },
      {
        path: 'creature',
        element: <CreatureDisplay />,
      },
      {
        path: 'npc',
        element: <NPCHandler />,
      },
      {
        path: 'fate',
        element: <FateInput />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
