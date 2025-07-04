import React from "react";
import EnumSelector from "../../components/EnumSelector";
import { NPCRelationship, relationshipTableMap } from "./data/npcRelationship";
import { dispositionTableMap, NpcDisposition } from "./data/npcDisposition";
import EnumRoll from "../../components/EnumRoll";
import OracleDisplay from "../oracle/OracleDisplay";
import { npcConversationFocusTable } from "./data/npcConversationFocusTable";
import { npcBearingTable } from "./data/npcBeartingTable";
import { npcDispositionTable } from "./data/npcDispositionTable";
import { RollOnTableIcon } from "../../components/RollOnTableIcon";
import { TableInTooltip } from "../../components/TableInTooltip";

const NPCHandler = () => {
  const [selectedNPCRelationship, setSelectedNPCRelationship] =
    React.useState<NPCRelationship>(NPCRelationship.Neutral);

  const [selectedNPCDisposition, setSelectedNPCDisposition] =
    React.useState<NpcDisposition>(NpcDisposition.Friendly);

  return (
    <div className="flex flex-col justify-center items-right bg-gray-50 p-2 space-y-2 h-full">
      <EnumSelector
        enumObject={NPCRelationship}
        value={selectedNPCRelationship}
        onChange={setSelectedNPCRelationship}
        label="Relation avec le PNJ ?"
      />
      <div>
        <TableInTooltip
          text={"Humeur"}
          table={relationshipTableMap[selectedNPCRelationship]}
        />
        <span className="italic">
          <RollOnTableIcon
            table={relationshipTableMap[selectedNPCRelationship]}
          />
        </span>{" "}
      </div>
      <span>
        <TableInTooltip text={"Attitude"} table={npcDispositionTable} />
        <span className="italic">
          <RollOnTableIcon table={npcDispositionTable} />
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
          text={"Sujet d'interet"}
          table={npcConversationFocusTable}
        />
        <span className="italic">
          <RollOnTableIcon table={npcConversationFocusTable} />
        </span>{" "}
      </span>
    </div>
  );
};

export default NPCHandler;
