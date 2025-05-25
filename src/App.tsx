import React from 'react';
import './App.css';
import CreatureDisplay from './features/creatureGenerator/CreatureDisplay';
import OracleDisplay from './shared/components/OracleDisplay';
import ListRoll from './shared/components/ListRolls';
import { ItemList } from './type';
import ChaosDisplay from './features/chaos/ChaosDisplay';
import ChaosHandler from './features/chaos/ChaosHandler';
import FateDisplay from './features/fate/FateDisplay';
import NPCHandler from './features/npcConversation/NPCConversationHandler';
import RandomEventFocus from './features/scene/RandomEventFocus';
import SceneAdjustement from './features/scene/SceneAdjustement';
import SceneAlterationDisplay from './features/scene/SceneAlterationDisplay';
import ItemListDisplay from './shared/components/ItemListDisplay';
import { ageTable, npcQualities } from './shared/data/oracleTable';

function App() {
  const [chaos, setChaos] = React.useState<number>(5);
  const [characterList, setCharacterList] = React.useState<ItemList[]>([]);

  return (
    <>
      <CreatureDisplay />
      <OracleDisplay oracle={ageTable} />
      <OracleDisplay oracle={npcQualities} />
      <FateDisplay chaos={chaos} />
      <ChaosHandler chaos={chaos} setChaos={setChaos} />
      <ChaosDisplay chaos={chaos} />
      <SceneAlterationDisplay chaos={chaos} />
      <SceneAdjustement />
      <RandomEventFocus />
      <ItemListDisplay
        name='Character List'
        itemList={characterList}
        setItemList={setCharacterList}
      />
      <ListRoll name='Character List' itemList={characterList} />
      <NPCHandler />
    </>
  );
}

export default App;
