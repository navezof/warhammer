"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.armour = exports.hardy = void 0;
exports.hardy = {
    name: 'Hardy',
    description: 'The creature can sustain more damage than most. Increase its Wounds by a number equal to its Toughness Bonus (applied before any Size modifiers)..',
    apply: (creature) => {
        creature.characteristics.wounds += creature.characteristics.toughness / 10;
        return creature;
    },
};
exports.armour = {
    name: 'Armor',
    description: 'The creature is protected by armour or thick hide. It has Rating Armour Points on all Hit Locations..',
};
