"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatureTypes = exports.creatureTypeDefinition = void 0;
const creatureTraits_1 = require("./creatureTraits");
exports.creatureTypeDefinition = [
    {
        type: "Goblin",
        baseCharacteristics: {
            movement: 4,
            weaponSkill: 25,
            ballisticSkill: 35,
            strength: 30,
            toughness: 30,
            initiative: 20,
            agility: 35,
            dexterity: 30,
            intelligence: 30,
            willpower: 20,
            fellowship: 20,
            wounds: 11
        },
        baseTraits: [
            {
                trait: creatureTraits_1.armour,
                traitConfig: {
                    parameter: 1
                },
                optional: false
            },
            {
                trait: creatureTraits_1.hardy,
                optional: true
            }
        ]
    },
    {
        type: "Orc",
        baseCharacteristics: {
            movement: 4,
            weaponSkill: 35,
            ballisticSkill: 30,
            strength: 35,
            toughness: 45,
            initiative: 20,
            agility: 25,
            dexterity: 20,
            intelligence: 25,
            willpower: 35,
            fellowship: 20,
            wounds: 14
        },
        baseTraits: [
            {
                trait: creatureTraits_1.armour,
                traitConfig: {
                    parameter: 3
                },
                optional: false
            },
            {
                trait: creatureTraits_1.hardy,
                optional: false
            }
        ]
    }
];
exports.creatureTypes = exports.creatureTypeDefinition.map(creature => creature.type);
