import { RollOnTable } from "../../components/RollOnTable";
import { NPCAppearance } from "./data/NPCAppearance";
import { NPCArchetypeTable } from "./data/NPCArchetype";
import { NPCLifeEvent } from "./data/NPCLifeEvent";
import { NPCQualifierTable } from "./data/NPCQualifier";
import { NPCQuirk } from "./data/NPCQuirk";

export const NpcGeneratorWidget = () => {
  return (
    <div>
      <RollOnTable
        title={"Archetype"}
        table={NPCArchetypeTable}
        numberOfRoll={2}
        iconType="dice"
      />
      <RollOnTable
        title={"Qualité"}
        table={NPCQualifierTable}
        iconType="dice"
      />
      <RollOnTable
        title={"Appearance"}
        table={NPCAppearance}
        numberOfRoll={2}
        iconType="dice"
      />
      <RollOnTable title={"Passé"} table={NPCLifeEvent} iconType="dice" />
      <RollOnTable
        title={"Trait Particulier"}
        table={NPCQuirk}
        numberOfRoll={2}
        iconType="dice"
      />
    </div>
  );
};
