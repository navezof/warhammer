import React from 'react';
import EnumSelector from '../../shared/components/EnumSelector';
import { NPCRelationship, relationshipTableMap } from './data/npcRelationship';
import { dispositionTableMap, NpcDisposition } from './data/npcDisposition';
import EnumRoll from '../../shared/components/EnumRoll';
import OracleDisplay from '../../shared/components/OracleDisplay';
import { npcConversationFocusTable } from './data/npcConversationFocusTable';

const NPCHandler = () => {
  const [selectedNPCRelationship, setSelectedNPCRelationship] =
    React.useState<NPCRelationship>(NPCRelationship.Neutral);

  const [selectedNPCDisposition, setSelectedNPCDisposition] =
    React.useState<NpcDisposition>(NpcDisposition.Friendly);

  return (
    <>
      <div>
        <h2>NPC Handler</h2>
        <EnumSelector
          enumObject={NPCRelationship}
          value={selectedNPCRelationship}
          onChange={setSelectedNPCRelationship}
          label='NPC Relationship'
        />
        <OracleDisplay oracle={relationshipTableMap[selectedNPCRelationship]} />
        <EnumSelector
          enumObject={NpcDisposition}
          value={selectedNPCDisposition}
          onChange={setSelectedNPCDisposition}
          label='NPC Disposition'
        />
        <EnumRoll
          enumObject={NpcDisposition}
          onChange={(value: string) =>
            setSelectedNPCDisposition(value as NpcDisposition)
          }
          label='NPC Disposition'
        />
        <OracleDisplay oracle={dispositionTableMap[selectedNPCDisposition]} />
        <OracleDisplay oracle={npcConversationFocusTable} />
      </div>
    </>
  );
};

export default NPCHandler;
