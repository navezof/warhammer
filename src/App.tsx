import React from 'react';
import { ItemList } from './types/type';
import { Link, Outlet } from 'react-router-dom';
import { RPGToolboxProvider } from './RPGToolboxContext';

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
          </ul>
        </nav>

        <main>
          <Outlet context={{ characterList, setCharacterList }} />
        </main>

        <aside>
          {/* <ItemListDisplay
          name='Character List'
          itemList={characterList}
          setItemList={setCharacterList}
        />
        <OracleDisplay oracle={ageTable} />
        <OracleDisplay oracle={npcQualities} />
        <FateDisplay chaos={chaos} />
        <ChaosHandler chaos={chaos} setChaos={setChaos} />
        <ChaosDisplay chaos={chaos} />
        <SceneAlterationDisplay chaos={chaos} />
        <SceneAdjustement />
        <RandomEventFocus /> 
              <ListRoll name='Character List' itemList={characterList} />
              */}
        </aside>
      </div>
    </RPGToolboxProvider>
  );
}

/**
 import { useOutletContext } from 'react-router-dom';

type ContextType = {
  chaos: number;
  setChaos: (value: number) => void;
  characterList: ItemList[];
  setCharacterList: (value: ItemList[]) => void;
};

function ChildComponent() {
  const { chaos, setChaos } = useOutletContext<ContextType>();
  
  return <div>Chaos Level: {chaos}</div>;
}
 



 */

export default App;
