import { Table } from '../types/type';

export const ageTable: Table = {
  name: 'Age Table',
  description: 'A table to determine the age of a creature.',
  dice: '1d8',
  content: [
    '1; Child',
    '2; Adolescent',
    '3-4; Adult',
    '5-6; Middle-Aged',
    '7; Elderly',
    '8; Ancient',
  ],
};

export const npcQualities: Table = {
  name: 'NPC Qualities',
  description: 'A table to determine the qualities of an NPC.',
  dice: '1d20',
  content: [
    '1;Balding;Spits;Hiding a fugitive',
    '2;Stocky build;Always eating;Adores baby animals',
    '3;Very tall;Moves quickly;Obsessed with fire',
    '4;Beauty mark;Card tricks;In a religious cult',
    '5;One eye;Prays aloud;Is a half-demon',
    "6;Braided hair;Writes in diary;Was a wizard's apprentice",
    '7;Muscular;Apologetic;Needlessly picks pockets',
    '8;White hair;Slaps backs;Has a false identity',
    '9;Scar on face;Drops things;Afraid of storms',
    '10;Willowy build;Swears oaths;Has functional gills',
    '11;Sweaty;Makes puns;In deep gambling debt',
    '12;Cleft chin;Rare accent;Works as a smuggler',
    '13;Frail;Easily spooked;Is a werewolf',
    '14;Big eyebrows;Forgetful;Can actually smell lies',
    '15;Tattooed;Speaks quietly;Cast out of wealthy family',
    '16;Floppy hat;Twitches;In love with a bartender',
    "17;Gold tooth;Moves slowly;Left the Thieves' Guild",
    '18;Six fingers;Speaks loudly;Best friends with a prince',
    '19;Very short;Swaggers;Retired crawler',
    '20;Large nose;Smokes pipe;Has a pet basilisk',
  ],
};
