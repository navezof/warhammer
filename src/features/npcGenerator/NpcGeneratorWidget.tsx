import { RollOnTable } from "../../components/RollOnTable";
import { tableRepository } from "../../utils/tableRepository";

export const NpcGeneratorWidget = () => {
  return (
    <div>
      <RollOnTable
        title={"Archetype"}
        table={tableRepository.get("Archetype Table")}
        numberOfRoll={2}
        iconType="dice"
      />
      <RollOnTable
        title={"Qualité"}
        table={tableRepository.get("NPC Qualifier Table")}
        iconType="dice"
      />
      <RollOnTable
        title={"Appearance"}
        table={tableRepository.get("NPC Appearance")}
        numberOfRoll={2}
        iconType="dice"
      />
      <RollOnTable
        title={"Passé"}
        table={tableRepository.get("Life Events")}
        iconType="dice"
      />
      <RollOnTable
        title={"Trait Particulier"}
        table={tableRepository.get("NPC Quirk")}
        numberOfRoll={2}
        iconType="dice"
      />
    </div>
  );
};
