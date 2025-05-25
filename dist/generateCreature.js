"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCreature = generateCreature;
const creatureType_1 = require("./data/creatureType");
const utils_1 = require("./utils/utils");
function generateTraits(creature, creatureTemplate) {
    var _a, _b;
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
            (_a = creature.traits) === null || _a === void 0 ? void 0 : _a.push({
                name: traitConfig ? `${trait.name} (${traitConfig.parameter})` : ,
                description: trait.description,
                traitConfig,
            });
            newTrait.name = "";
            newTrait.description = "";
            if (traitConfig) {
                newTrait.name += ' (' + traitConfig.parameter + ')';
            }
            else {
                newTrait.name = trait.name;
            }
            console.log('pUshing nuew trait:', newTrait);
            (_b = creature.traits) === null || _b === void 0 ? void 0 : _b.push(newTrait);
        }
    }
    return creature;
}
function generateCharacteristic(base) {
    return base - 10 + (0, utils_1.rollDie)('2d10');
}
function generateCreature(creatureType) {
    var _a, _b;
    const creatureTemplate = creatureType
        ? creatureType_1.creatureTypeDefinition.find((t) => t.type === creatureType)
        : creatureType_1.creatureTypeDefinition[(0, utils_1.randomNumber)(0, creatureType_1.creatureTypeDefinition.length - 1)];
    if (!creatureTemplate) {
        throw new Error('Creature type not found');
    }
    const { movement, weaponSkill, ballisticSkill, strength, toughness, initiative, agility, dexterity, intelligence, willpower, fellowship, wounds, } = creatureTemplate.baseCharacteristics;
    const creature = {
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
    console.log('creature', (_b = (_a = creature.traits) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.name);
    return creature;
}
