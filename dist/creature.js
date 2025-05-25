"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = hello;
const creature = {
    name: "Goblin"
};
function getCreature() {
    return creature;
}
function writeOnJournal() {
    const journal = document.getElementById("journal");
    if (journal) {
        journal.innerHTML = "You have encountered a " + getCreature().name;
    }
}
const buttonGenerateCreature = document.getElementById("generateCreature");
if (buttonGenerateCreature) {
    buttonGenerateCreature.addEventListener("click", writeOnJournal);
}
function hello() {
    alert('Button 2 clicked');
}
