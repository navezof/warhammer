import path from 'path';
import React from 'react';
import App from '../App';
import CreatureDisplay from '../features/creatureGenerator/CreatureDisplay';
import NPCHandler from '../features/npcConversation/NPCConversationHandler';
import { createBrowserRouter } from 'react-router-dom';

export default function Root() {
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

  return { router };
}
