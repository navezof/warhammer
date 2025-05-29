import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import CreatureDisplay from './features/creatureGenerator/CreatureDisplay';
import NPCHandler from './features/npcConversation/NPCConversationHandler';
import SceneAlterationDisplay from './features/scene/SceneAlterationDisplay';
import SceneAdjustement from './features/scene/SceneAdjustement';
import RandomEventFocus from './features/scene/RandomEventFocus';
import ChaosHandler from './features/chaos/ChaosHandler';
import ChaosDisplay from './features/chaos/ChaosDisplay';
//import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
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
