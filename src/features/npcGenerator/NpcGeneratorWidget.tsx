import { RollOnTable } from '../../components/RollOnTable';
import { NPCAppearance } from './data/NPCAppearance';
import NPCArchetypeTable from './data/NPCArchetype';
import { NPCLifeEvent } from './data/NPCLifeEvent';
import NPCQualifierTable from './data/NPCQualifier';
import { NPCQuirk } from './data/NPCQuirk';

export const NpcGeneratorWidget = () => {
  return (
    <div>
      <div>
        <RollOnTable title={'Archetype'} table={NPCArchetypeTable} />
      </div>
      <div>
        <RollOnTable title={'Qualité'} table={NPCQualifierTable} />
      </div>
      <div>
        <RollOnTable title={'Appearance'} table={NPCAppearance} />
      </div>
      <div>
        <RollOnTable title={'Passé'} table={NPCLifeEvent} />
      </div>
      <div>
        <RollOnTable title={'Trait Particulier'} table={NPCQuirk} />
      </div>
    </div>
  );
};
