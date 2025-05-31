import React from 'react';
import { ItemList } from './types/type';
import { Link, Outlet } from 'react-router-dom';
import { RPGToolboxProvider } from './RPGToolboxContext';
import './app.css';

function App() {
  const [characterList, setCharacterList] = React.useState<ItemList[]>([]);

  return (
    <RPGToolboxProvider>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/creature'>Creature Generator</Link>
            </li>
            <li>
              <Link to='/npc'>NPC Handler</Link>
            </li>
            <li>
              <Link to='/fate'>Fate</Link>
            </li>
            <li>
              <Link to='/scene'>Scene</Link>
            </li>
            <li>
              <Link to='/v1/fates'>Fate V1</Link>
            </li>
            <li>
              <Link to='/v1/oracles'>Oracle V1</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Outlet context={{ characterList, setCharacterList }} />
        </main>
      </div>
    </RPGToolboxProvider>
  );
}

export default App;
