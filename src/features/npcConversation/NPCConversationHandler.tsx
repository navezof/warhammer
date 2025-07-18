import React from "react";
import EnumSelector from "../../components/EnumSelector";
import { NPCRelationship, relationshipMap } from "./npcRelationshipMap";
import { NpcDisposition } from "./npcDispositionMap";
import { RollOnTableWithIcon } from "../../components/RollOnTableWithIcon";
import { TableInTooltip } from "../../components/TableInTooltip";
import { tableRepository } from "../../utils/tableRepository";

const NPCHandler = () => {
  const [selectedNPCRelationship, setSelectedNPCRelationship] =
    React.useState<NPCRelationship>(NPCRelationship.Neutral);

  const [selectedNPCDisposition, setSelectedNPCDisposition] =
    React.useState<NpcDisposition>(NpcDisposition.Friendly);

  return (
    <div className="items-right">
      <EnumSelector
        enumObject={NPCRelationship}
        value={selectedNPCRelationship}
        onChange={setSelectedNPCRelationship}
        label="Relation avec le PNJ ?"
      />
      <div>
        <TableInTooltip
          title={"Humeur"}
          table={relationshipMap[selectedNPCRelationship]}
        />
        <span className="italic">
          <RollOnTableWithIcon
            table={relationshipMap[selectedNPCRelationship]}
          />
        </span>{" "}
      </div>
      <span>
        <TableInTooltip
          title={"Attitude"}
          table={tableRepository.get("NPC Disposition Table")}
        />
        <span className="italic">
          <RollOnTableWithIcon
            table={tableRepository.get("NPC Disposition Table")}
          />
        </span>{" "}
      </span>
      <EnumSelector
        enumObject={NpcDisposition}
        value={selectedNPCDisposition}
        onChange={setSelectedNPCDisposition}
        label="Attitude du PNJ"
      />
      <span>
        <TableInTooltip
          title={"Sujet d'intérêt"}
          table={tableRepository.get("NPC Conversation Focus Table")}
        />
        <span className="italic">
          <RollOnTableWithIcon
            table={tableRepository.get("NPC Conversation Focus Table")}
          />
        </span>{" "}
      </span>
    </div>
  );
};

export default NPCHandler;
