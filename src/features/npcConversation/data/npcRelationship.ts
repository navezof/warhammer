import { Table } from '../../../types/type';
import { npcConversationMoodTable } from './npcConversationMoodTable';

export enum NPCRelationship {
  Loved = 'Loved',
  Friendly = 'Friendly',
  Peaceful = 'Peaceful',
  Neutral = 'Neutral',
  Distrustful = 'Distrustful',
  Hostile = 'Hostile',
  Hated = 'Hated',
}

export const relationshipTableMap: Record<NPCRelationship, Table> = {
  [NPCRelationship.Loved]: npcConversationMoodTable[0],
  [NPCRelationship.Friendly]: npcConversationMoodTable[1],
  [NPCRelationship.Peaceful]: npcConversationMoodTable[2],
  [NPCRelationship.Neutral]: npcConversationMoodTable[3],
  [NPCRelationship.Distrustful]: npcConversationMoodTable[4],
  [NPCRelationship.Hostile]: npcConversationMoodTable[5],
  [NPCRelationship.Hated]: npcConversationMoodTable[6],
};
