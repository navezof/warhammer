import { Table } from '../../../types/type';

export const npcBearingTable: Table[] = [
  {
    // Scheming
    name: 'NPC Bearting Table - Scheming',
    description:
      'A table to determine the bearing of an NPC during a conversation, focusing on scheming.',
    dice: '1d100',
    content: [
      '1-10;intent',
      '11-20;bargain',
      '21-30;means',
      '31-40;proposition',
      '41-50;plan',
      '51-60;compromise',
      '61-70;agenda',
      '71-80;arrangement',
      '81-90;negotiation',
      '91-100;plot',
    ],
  },
  {
    // Insane
    name: 'NPC Bearting Table - Insane',
    description:
      'A table to determine the bearing of an NPC during a conversation, focusing on insanity.',
    dice: '1d100',
    content: [
      '1-10;madness',
      '11-20;fear',
      '21-30;accident',
      '31-40;chaos',
      '41-50;idiocy',
      '51-60;illusion',
      '61-70;turmoil',
      '71-80;confusion',
      '81-90;façade',
      '91-100;bewilderment',
    ],
  },
  {
    // Friendly
    name: 'NPC Bearting Table - Friendly',
    description:
      'A table to determine the bearing of an NPC during a conversation, focusing on friendliness.',
    dice: '1d100',
    content: [
      '1-10;alliance',
      '11-20;comfort',
      '21-30;gratitude',
      '31-40;shelter',
      '41-50;happiness',
      '51-60;support',
      '61-70;promise',
      '71-80;delight',
      '81-90;aid',
      '91-100;celebration',
    ],
  },
  {
    //Hostile
    name: 'NPC Bearting Table - Hostile',
    description:
      'A table to determine the bearing of an NPC during a conversation, focusing on hostility.',
    dice: '1d100',
    content: [
      '1-10;death',
      '11-20;capture',
      '21-30;judgment',
      '31-40;combat',
      '41-50;surrender',
      '51-60;rage',
      '61-70;resentment',
      '71-80;submission',
      '81-90;injury',
      '91-100;destruction',
    ],
  },
  {
    // Inquisitive
    name: 'NPC Bearting Table - Inquisitive',
    description:
      'A table to determine the bearing of an NPC during a conversation, focusing on inquisitiveness.',
    dice: '1d100',
    content: [
      '1-10;questions',
      '11-20;investigation',
      '21-30;interest',
      '31-40;demand',
      '41-50;suspicion',
      '51-60;request',
      '61-70;curiosity',
      '71-80;skepticism',
      '81-90;command',
      '91-100;petition',
    ],
  },
  {
    // Knowing
    name: 'NPC Bearting Table - Knowing',
    description:
      'A table to determine the bearing of an NPC during a conversation, focusing on knowledge.',
    dice: '1d100',
    content: [
      '1-10;report',
      '11-20;effects',
      '21-30;examination',
      '31-40;records',
      '41-50;account',
      '51-60;news',
      '61-70;history',
      '71-80;telling',
      '81-90;discourse',
      '91-100;speech',
    ],
  },
  {
    // Mysterious
    name: 'NPC Bearting Table - Mysterious',
    description:
      'A table to determine the bearing of an NPC during a conversation, focusing on mystery.',
    dice: '1d100',
    content: [
      '1-10;rumor',
      '11-20;uncertainty',
      '21-30;secrets',
      '31-40;misdirection',
      '41-50;whispers',
      '51-60;lies',
      '61-70;shadows',
      '71-80;enigma',
      '81-90;obscurity',
      '91-100;conundrum',
    ],
  },
  {
    // Prejudiced
    name: 'NPC Bearting Table - Prejudiced',
    description:
      'A table to determine the bearing of an NPC during a conversation, focusing on prejudice.',
    dice: '1d100',
    content: [
      '1-10;reputation',
      '11-20;doubt',
      '21-30;bias',
      '31-40;dislike',
      '41-50;partiality',
      '51-60;belief',
      '61-70;view',
      '71-80;discrimination',
      '81-90;assessment',
      '91-100;difference',
    ],
  },
];
