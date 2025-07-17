import React from "react";
import EnumSelector from "../../components/EnumSelector";
import { NPCRelationship, relationshipTableMap } from "./data/npcRelationship";
import { NpcDisposition } from "./data/npcDisposition";
import { npcConversationFocusTable } from "./data/npcConversationFocusTable";
import { npcDispositionTable } from "./data/npcDispositionTable";
import { RollOnTableWithIcon } from "../../components/RollOnTableWithIcon";
import { TableInTooltip } from "../../components/TableInTooltip";

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
          table={relationshipTableMap[selectedNPCRelationship]}
        />
        <span className="italic">
          <RollOnTableWithIcon
            table={relationshipTableMap[selectedNPCRelationship]}
          />
        </span>{" "}
      </div>
      <span>
        <TableInTooltip title={"Attitude"} table={npcDispositionTable} />
        <span className="italic">
          <RollOnTableWithIcon table={npcDispositionTable} />
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
          table={npcConversationFocusTable}
        />
        <span className="italic">
          <RollOnTableWithIcon table={npcConversationFocusTable} />
        </span>{" "}
      </span>
    </div>
  );
};

export default NPCHandler;
