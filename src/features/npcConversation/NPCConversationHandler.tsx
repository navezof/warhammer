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

const NPCHandler = () => {
  const [selectedNPCRelationship, setSelectedNPCRelationship] =
    React.useState<NPCRelationship>(NPCRelationship.Neutral);

  const [selectedNPCDisposition, setSelectedNPCDisposition] =
    React.useState<NpcDisposition>(NpcDisposition.Friendly);

  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div>
        <EnumSelector
          enumObject={NPCRelationship}
          value={selectedNPCRelationship}
          onChange={setSelectedNPCRelationship}
          label="Quel relation as-tu avec ce PNJ ?"
        />
        <p>
          Lance sur la table d'Humeur{" "}
          <span>
            <RollOnTableIcon
              table={relationshipTableMap[selectedNPCRelationship]}
            />
          </span>{" "}
          pour savoir l'humeur du PNJ lors de cette conversation.
        </p>
        <OracleDisplay oracle={relationshipTableMap[selectedNPCRelationship]} />
        <EnumSelector
          enumObject={NpcDisposition}
          value={selectedNPCDisposition}
          onChange={setSelectedNPCDisposition}
          label="Quel est l'attitude du PNJ lors de cette conversation?"
        />
        <p>Si jamais tu préfère, tu peux lancer sur la table d'Attitude. </p>
        <OracleDisplay oracle={npcDispositionTable} />
        <p>
          Lance sur la table d'interêt pour savoir sur quel sujet le PNJ
          s'interesse particulièrement lors de cette conversation.
        </p>
        <OracleDisplay oracle={npcConversationFocusTable} />
      </div>
    </div>
  );
};

export default NPCHandler;
