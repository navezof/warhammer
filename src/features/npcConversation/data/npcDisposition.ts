import { Table } from '../../../types/type';
import { npcBearingTable } from './npcBearingTable';

export enum NpcDisposition {
  Scheming = 'Scheming',
  Insane = 'Insane',
  Friendly = 'Friendly',
  Hostile = 'Hostile',
  Inquisitive = 'Inquisitive',
  Knowing = 'Knowing',
  Mysterious = 'Mysterious',
  Prejudiced = 'Prejudiced',
}

export const dispositionTableMap: Record<NpcDisposition, Table> = {
  [NpcDisposition.Scheming]: npcBearingTable[0],
  [NpcDisposition.Insane]: npcBearingTable[1],
  [NpcDisposition.Friendly]: npcBearingTable[2],
  [NpcDisposition.Hostile]: npcBearingTable[3],
  [NpcDisposition.Inquisitive]: npcBearingTable[4],
  [NpcDisposition.Knowing]: npcBearingTable[5],
  [NpcDisposition.Mysterious]: npcBearingTable[6],
  [NpcDisposition.Prejudiced]: npcBearingTable[7],
};
