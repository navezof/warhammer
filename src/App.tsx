import React from "react";
import { ItemList } from "./types/type";
import { Outlet } from "react-router-dom";
import { RPGToolboxProvider } from "./RPGToolboxContext";
import "./app.css";
import Dashboard from "./features/dashboard/Dashboard";

function App() {
  const [characterList, setCharacterList] = React.useState<ItemList[]>([]);

  return (
    <RPGToolboxProvider>
      <div>
        <main>
          <Outlet context={{ characterList, setCharacterList }} />
          <Dashboard />
        </main>
      </div>
    </RPGToolboxProvider>
  );
}

export default App;
