import { Creature, Trait } from '../../../type';

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
