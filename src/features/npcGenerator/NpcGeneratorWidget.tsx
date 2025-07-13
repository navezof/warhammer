import { RollOnTable } from "../../components/RollOnTable";
import { NPCAppearance } from "./data/NPCAppearance";
import { NPCArchetypeTable } from "./data/NPCArchetype";
import { NPCLifeEvent } from "./data/NPCLifeEvent";
import { NPCQualifierTable } from "./data/NPCQualifier";
import { NPCQuirk } from "./data/NPCQuirk";

export const NpcGeneratorWidget = () => {
  return (
    <div>
      <RollOnTable title={"Archetype"} table={NPCArchetypeTable} />
      <RollOnTable title={"Qualité"} table={NPCQualifierTable} />
      <RollOnTable title={"Appearance"} table={NPCAppearance} />
      <RollOnTable title={"Passé"} table={NPCLifeEvent} />
      <RollOnTable title={"Trait Particulier"} table={NPCQuirk} />
    </div>
  );
};
