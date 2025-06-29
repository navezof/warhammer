import React from 'react';
import { ItemList } from './types/type';
import { Link, Outlet } from 'react-router-dom';
import { RPGToolboxProvider } from './RPGToolboxContext';
import './app.css';
import { DashboardPage } from './features/dashboard/DashboardPage';

function App() {
  const [characterList, setCharacterList] = React.useState<ItemList[]>([]);

  return (
    <RPGToolboxProvider>
      <div>
        <main>
          <Outlet context={{ characterList, setCharacterList }} />
          <DashboardPage />
        </main>
      </div>
    </RPGToolboxProvider>
  );
}

export default App;
