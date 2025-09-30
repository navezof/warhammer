export type WidgetType =
  | "fate"
  | "oracle"
  | "actor"
  | "thread"
  | "npcInteraction"
  | "scene"
  | "name"
  | "npcGenerator"
  | "creatureCard";

export interface Widget {
  id: string;
  type: WidgetType;
}

export interface Creature {
  name: string;
  type: string;
  description: string;
  characteristics: {
    movement: number;
    weaponSkill: number;
    ballisticSkill: number;
    strength: number;
    toughness: number;
    initiative: number;
    agility: number;
    dexterity: number;
    intelligence: number;
    willpower: number;
    fellowship: number;
    wounds: number;
  };
  traits?: AppliedTrait[];
}

export interface CreatureTypeDefinition {
  type: string;
  baseCharacteristics: {
    movement: number;
    weaponSkill: number;
    ballisticSkill: number;
    strength: number;
    toughness: number;
    initiative: number;
    agility: number;
    dexterity: number;
    intelligence: number;
    willpower: number;
    fellowship: number;
    wounds: number;
  };
  baseTraits?: TraitDefinition[];
  optionalTraits?: TraitDefinition[];
}

export interface Table {
  name: string;
  description?: string;
  dice: string;
  content: string[];
}

export interface ItemList {
  id: number;
  value: string;
}
