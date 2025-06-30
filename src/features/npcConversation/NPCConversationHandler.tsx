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
    <div className="flex justify-center items-center bg-gray-50 px-2 py-4">
      <div>
        <EnumSelector
          enumObject={NPCRelationship}
          value={selectedNPCRelationship}
          onChange={setSelectedNPCRelationship}
          label="Quel relation as-tu avec ce PNJ ?"
        />
        <span>
          Lance sur la table d'
          <TableInTooltip
            text={"Humeur"}
            table={relationshipTableMap[selectedNPCRelationship]}
          />
          <RollOnTableIcon
            table={relationshipTableMap[selectedNPCRelationship]}
          />
          pour savoir l'humeur du PNJ lors de cette conversation.
        </span>
        <EnumSelector
          enumObject={NpcDisposition}
          value={selectedNPCDisposition}
          onChange={setSelectedNPCDisposition}
          label="Quel est l'attitude du PNJ lors de cette conversation?"
        />
        <span>
          Si jamais tu préfère, tu peux lancer sur la table d'
          <TableInTooltip text={"Attitude"} table={npcDispositionTable} />
          <RollOnTableIcon table={npcDispositionTable} />
        </span>
        <span>
          Lance sur la table d'
          <TableInTooltip text={"Interet"} table={npcConversationFocusTable} />
          <RollOnTableIcon table={npcConversationFocusTable} /> pour savoir sur
          quel sujet le PNJ s'interesse particulièrement lors de cette
          conversation.
        </span>
      </div>
    </div>
  );
};

export default NPCHandler;
