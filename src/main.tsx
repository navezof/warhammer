import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import CreatureDisplay from './features/creatureGenerator/CreatureDisplay';
import NPCHandler from './features/npcConversation/NPCConversationHandler';
import { FateQuestionWidget } from './features/fate/FateQuestionWidget';
import { Scene } from './features/scene/Scene';

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
      {
        path: 'scene',
        element: <Scene />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
