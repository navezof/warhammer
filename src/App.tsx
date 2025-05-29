import React from 'react';
import CreatureDisplay from './features/creatureGenerator/CreatureDisplay';
import OracleDisplay from './shared/components/OracleDisplay';
import ListRoll from './shared/components/ListRolls';
import { ItemList } from './types/type';
import ChaosDisplay from './features/chaos/ChaosDisplay';
import ChaosHandler from './features/chaos/ChaosHandler';
import FateDisplay from './features/fate/FateDisplay';
import NPCHandler from './features/npcConversation/NPCConversationHandler';
import RandomEventFocus from './features/scene/RandomEventFocus';
import SceneAdjustement from './features/scene/SceneAdjustement';
import SceneAlterationDisplay from './features/scene/SceneAlterationDisplay';
import ItemListDisplay from './shared/components/ItemListDisplay';
import { ageTable, npcQualities } from './shared/data/oracleTable';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const [chaos, setChaos] = React.useState<number>(5);
  const [characterList, setCharacterList] = React.useState<ItemList[]>([]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/creature'>Creature Generator</Link>
            <Link to='/npc'>NPC Handler</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet
          context={{ chaos, setChaos, characterList, setCharacterList }}
        />
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
        <RandomEventFocus /> */}
      </aside>
      <ListRoll name='Character List' itemList={characterList} />
    </div>
  );
}

export default App;
