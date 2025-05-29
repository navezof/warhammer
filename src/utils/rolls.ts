import { Table } from '../types/type';
import { convertCSVArrayToArray } from './utils';

export const rollOnTable = (
  table: Table,
  column: number = 1,
  modifier: number = 0
): string => {
  let result = '';
  const randomNumber = rollDie(table.dice);
  const adjustedNumber = randomNumber + modifier;
  const content = convertCSVArrayToArray(table.content);
  for (let i = 0; i < table.content.length; i += 1) {
    const entry = content[i];
    if (entry[0].includes('-')) {
      const range = entry[0].split('-');
      const lowEnd = parseInt(range[0], 10);
      const highEnd = parseInt(range[1], 10);
      if (adjustedNumber >= lowEnd && adjustedNumber <= highEnd) {
        result = entry[column];
      }
    } else if (parseInt(entry[0], 10) === randomNumber) {
      result = entry[column];
    }
  }
  return `(${adjustedNumber}) ${result}`;
};

export const rollOnSubTable = (
  parentTable: Table[],
  subtableIndex: number,
  column: number,
  modifier: number = 0
): string => {
  const subtable = parentTable[subtableIndex];
  return rollOnTable(subtable, column, modifier);
};

export function rollDie(expression: string): number {
  const parts = expression.split('d');
  const numberOfDice = parseInt(parts[0], 10);
  const sides = parseInt(parts[1], 10);

  if (Number.isNaN(sides) || sides <= 0) {
    throw new Error(`Invalid dice sides value: "${parts[1]}"`);
  }

  let total = 0;
  for (let i = 0; i < numberOfDice; i += 1) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  return total;
}
