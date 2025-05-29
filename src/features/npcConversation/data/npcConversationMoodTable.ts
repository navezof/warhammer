import { Table } from '../../../types/type';

export const npcConversationMoodTable: Table[] = [
  {
    // Loved
    name: 'NPC Conversation Mood Table - Loved',
    description:
      'A table to determine the mood of an NPC during a conversation, focusing on love and affection.',
    dice: '1d100',
    content: [
      '1;withdrawn',
      '2-6;guarded',
      '7-16;cautious',
      '17-31;neutral',
      '32-70;sociable',
      '71-85;helpful',
      '86-100;forthcoming',
    ],
  },
  {
    // Friendly
    name: 'NPC Conversation Mood Table - Friendly',
    description:
      'A table to determine the mood of an NPC during a conversation, focusing on friendliness.',
    dice: '1d100',
    content: [
      '1-2;withdrawn',
      '3-8;guarded',
      '9-20;cautious',
      '21-40;neutral',
      '41-76;sociable',
      '77-89;helpful',
      '90-100;forthcoming',
    ],
  },
  {
    // Peaceful
    name: 'NPC Conversation Mood Table - Peaceful',
    description:
      'A table to determine the mood of an NPC during a conversation, focusing on peace and calmness.',
    dice: '1d100',
    content: [
      '1-3;withdrawn',
      '4-11;guarded',
      '12-25;cautious',
      '26-55;neutral',
      '56-82;sociable',
      '83-93;helpful',
      '94-100;forthcoming',
    ],
  },
  {
    // Neutral
    name: 'NPC Conversation Mood Table - Neutral',
    description:
      'A table to determine the mood of an NPC during a conversation, focusing on neutrality and indifference.',
    dice: '1d100',
    content: [
      '1-5;withdrawn',
      '6-15;guarded',
      '16-30;cautious',
      '31-60;neutral',
      '61-85;sociable',
      '86-95;helpful',
      '96-100;forthcoming',
    ],
  },
  {
    // Distrusful
    name: 'NPC Conversation Mood Table - Distrustful',
    description:
      'A table to determine the mood of an NPC during a conversation, focusing on distrust and suspicion.',
    dice: '1d100',
    content: [
      '1-7;withdrawn',
      '8-18;guarded',
      '19-46;cautious',
      '47-76;neutral',
      '77-90;sociable',
      '91-97;helpful',
      '98-100;forthcoming',
    ],
  },
  {
    // Hostile
    name: 'NPC Conversation Mood Table - Hostile',
    description:
      'A table to determine the mood of an NPC during a conversation, focusing on hostility and aggression.',
    dice: '1d100',
    content: [
      '1-11;withdrawn',
      '12-24;guarded',
      '25-61;cautious',
      '62-81;neutral',
      '82-93;sociable',
      '94-98;helpful',
      '99-100;forthcoming',
    ],
  },
  {
    // Hated
    name: 'NPC Conversation Mood Table - Hated',
    description:
      'A table to determine the mood of an NPC during a conversation, focusing on hatred and animosity.',
    dice: '1d100',
    content: [
      '1-15;withdrawn',
      '16-30;guarded',
      '31-69;cautious',
      '70-84;neutral',
      '85-94;sociable',
      '95-99;helpful',
      '100;forthcoming',
    ],
  },
];
