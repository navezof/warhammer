"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = void 0;
exports.rollDie = rollDie;
function rollDie(expression) {
    // expression = "1d6"
    // expression = "2d10"
    // expression = "1d6+1"
    // expression = "1d6 + 1"
    // expression = "1d6-1"
    // expression = "1d6 - 1"
    // expression = "1d6*2"
    // expression = "1d6 * 2"
    // expression = "1d6/2"
    // expression = "1d6 / 2"
    const parts = expression.split('d');
    const numberOfDice = parseInt(parts[0], 10);
    const sides = parseInt(parts[1], 10);
    if (Number.isNaN(sides) || sides <= 0) {
        throw new Error(`Invalid dice sides value: "${parts[1]}"`);
    }
    let total = 0;
    for (let i = 0; i < numberOfDice; i += 1) {
        total += Math.floor(Math.random() * sides) + 1;
    }
    return total;
}
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.randomNumber = randomNumber;
