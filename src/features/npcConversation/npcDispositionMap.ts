import { Table } from "../../types/type";
import { tableRepository } from "../../utils/tableRepository";

export enum NpcDisposition {
  Scheming = "Scheming",
  Insane = "Insane",
  Friendly = "Friendly",
  Hostile = "Hostile",
  Inquisitive = "Inquisitive",
  Knowing = "Knowing",
  Mysterious = "Mysterious",
  Prejudiced = "Prejudiced",
}

export const dispositionMap: Record<NpcDisposition, Table | undefined> = {
  [NpcDisposition.Scheming]: tableRepository.get(
    "NPC Bearting Table - Scheming"
  ),
  [NpcDisposition.Insane]: tableRepository.get("NPC Bearing Table - Insane"),
  [NpcDisposition.Friendly]: tableRepository.get(
    "NPC Bearing Table - Friendly"
  ),
  [NpcDisposition.Hostile]: tableRepository.get("NPC Bearing Table - Hostile"),
  [NpcDisposition.Inquisitive]: tableRepository.get(
    "NPC Bearing Table - Inquisitive"
  ),
  [NpcDisposition.Knowing]: tableRepository.get("NPC Bearing Table - Knowing"),
  [NpcDisposition.Mysterious]: tableRepository.get(
    "NPC Bearing Table - Mysterious"
  ),
  [NpcDisposition.Prejudiced]: tableRepository.get(
    "NPC Bearing Table - Prejudiced"
  ),
};
