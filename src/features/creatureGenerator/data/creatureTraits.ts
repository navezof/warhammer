import { Creature } from '../../../types/type';

export interface TraitConfig {
  parameter: string;
}

export interface TraitDefinition {
  trait: Trait;
  traitConfig?: TraitConfig;
  optional: boolean;
}

export interface AppliedTrait {
  name: string;
  description: string;
  config: TraitConfig | undefined;
}

export interface Trait {
  name: string;
  description: string;
  apply?: (creature: Creature, config?: TraitConfig) => Creature;
}

export const hardy: Trait = {
  name: 'Hardy',
  description:
    'The creature can sustain more damage than most. Increase its Wounds by a number equal to its Toughness Bonus (applied before any Size modifiers)..',
  apply: (creature: Creature) => {
    creature.characteristics.wounds += Math.trunc(
      creature.characteristics.toughness / 10
    );
    return creature;
  },
};

export const armour: Trait = {
  name: 'Armor',
  description:
    'The creature is protected by armour or thick hide. It has Rating Armour Points on all Hit Locations..',
};

export const painless: Trait = {
  name: 'Painless',
  description: 'The creature feels no pain or can ignore it. All non-amputation penalties suffered from Critical Wounds are ignored, although Conditions are suffered as normal.'
}

export const size: Trait = {
  name: 'Size',
  description: 'This trait represents creatures whose size differ from the game standard (i.e. roughly human sized). There are seven steps of Size, ranging from Tiny to Monstrous.'
}