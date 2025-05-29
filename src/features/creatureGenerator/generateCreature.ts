import { creatureTypeDefinition } from './data/creatureType';
import { Creature, CreatureTypeDefinition } from '../../types/type';
import { rollDie } from '../../utils/rolls';
import { randomNumber } from '../../utils/utils';

function generateTraits(
  creature: Creature,
  creatureTemplate: CreatureTypeDefinition
): Creature {
  const { baseTraits } = creatureTemplate;
  if (!baseTraits) {
    return creature;
  }
  console.log('baseTraits', baseTraits);
  for (let i = 0; i < baseTraits.length; i++) {
    const baseTrait = baseTraits[i];
    console.log('baseTrait', baseTraits[i]);
    if (!baseTrait.optional) {
      const { trait, traitConfig } = baseTrait;
      if (trait.apply) trait.apply(creature, traitConfig);
      creature.traits?.push({
        name: traitConfig
          ? `${trait.name} (${traitConfig.parameter})`
          : trait.name,
        description: trait.description,
        config: traitConfig,
      });
    }
  }
  return creature;
}

function generateCharacteristic(base: number): number {
  return base - 10 + rollDie('2d10');
}

export function generateCreature(creatureType?: string): Creature {
  const creatureTemplate = creatureType
    ? creatureTypeDefinition.find((t) => t.type === creatureType)
    : creatureTypeDefinition[
        randomNumber(0, creatureTypeDefinition.length - 1)
      ];

  if (!creatureTemplate) {
    throw new Error('Creature type not found');
  }

  const {
    movement,
    weaponSkill,
    ballisticSkill,
    strength,
    toughness,
    initiative,
    agility,
    dexterity,
    intelligence,
    willpower,
    fellowship,
    wounds,
  } = creatureTemplate.baseCharacteristics;
  const creature: Creature = {
    name: creatureTemplate.type,
    type: creatureTemplate.type,
    description: 'A creature of type ' + creatureTemplate.type,
    characteristics: {
      movement: movement,
      weaponSkill: generateCharacteristic(weaponSkill),
      ballisticSkill: generateCharacteristic(ballisticSkill),
      strength: generateCharacteristic(strength),
      toughness: generateCharacteristic(toughness),
      initiative: generateCharacteristic(initiative),
      agility: generateCharacteristic(agility),
      dexterity: generateCharacteristic(dexterity),
      intelligence: generateCharacteristic(intelligence),
      willpower: generateCharacteristic(willpower),
      fellowship: generateCharacteristic(fellowship),
      wounds: wounds,
    },
    traits: [],
  };
  generateTraits(creature, creatureTemplate);
  console.log('creature', creature.traits?.[0]?.name);

  return creature;
}
