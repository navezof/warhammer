import { Table } from "../../types/type";
import { tableRepository } from "../../utils/tableRepository";

export enum NPCRelationship {
  Loved = "Loved",
  Friendly = "Friendly",
  Peaceful = "Peaceful",
  Neutral = "Neutral",
  Distrustful = "Distrustful",
  Hostile = "Hostile",
  Hated = "Hated",
}

export const relationshipMap: Record<NPCRelationship, Table | undefined> = {
  [NPCRelationship.Loved]: tableRepository.get(
    "NPC Conversation Mood Table - Loved"
  ),
  [NPCRelationship.Friendly]: tableRepository.get(
    "NPC Conversation Mood Table - Friendly"
  ),
  [NPCRelationship.Peaceful]: tableRepository.get(
    "NPC Conversation Mood Table - Peaceful"
  ),
  [NPCRelationship.Neutral]: tableRepository.get(
    "NPC Conversation Mood Table - Neutral"
  ),
  [NPCRelationship.Distrustful]: tableRepository.get(
    "NPC Conversation Mood Table - Distrustful"
  ),
  [NPCRelationship.Hostile]: tableRepository.get(
    "NPC Conversation Mood Table - Hostile"
  ),
  [NPCRelationship.Hated]: tableRepository.get(
    "NPC Conversation Mood Table - Hated"
  ),
};
