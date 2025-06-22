import { rollDie } from '../../utils/rolls';
import { FateOdds } from './data/fateOdds';
import fateTable from './data/fateTable';

export const rollOnFateTable = (odds: FateOdds, chaos: number): string => {
  const randomNumber = rollDie('1d100');
  if (randomNumber <= fateTable[odds][chaos - 1].low) {
    return `Oui Extrême! (${randomNumber})`;
  }
  if (randomNumber <= fateTable[odds][chaos - 1].mid) {
    return `Oui (${randomNumber})`;
  }
  if (randomNumber <= fateTable[odds][chaos - 1].high) {
    return `Non (${randomNumber})`;
  } else {
    return `Non Extrême! (${randomNumber})`;
  }
};
