"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const generateCreature_1 = require("../generateCreature");
const creatureType_1 = require("../data/creatureType");
const CreatureDisplay = () => {
    const [selectedType, setSelectedType] = react_1.default.useState();
    const [creature, setCreature] = react_1.default.useState(null);
    const handleClick = () => {
        const newCreature = (0, generateCreature_1.generateCreature)(selectedType);
        setCreature(newCreature);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("select", { id: "creatureTypeSelect", value: selectedType, onChange: (e) => {
                    setSelectedType(e.target.value || undefined);
                } },
                react_1.default.createElement("option", { value: "" }, "Random"),
                creatureType_1.creatureTypes.map((type) => (react_1.default.createElement("option", { key: type, value: type }, type))))),
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { onClick: handleClick }, "Generate Creature")),
        creature && (react_1.default.createElement("div", null,
            react_1.default.createElement("h2", null, creature.name),
            react_1.default.createElement("p", null,
                "M ",
                creature.characteristics.movement,
                " | WS ",
                creature.characteristics.weaponSkill),
            react_1.default.createElement("p", null,
                "Traits: ",
                creature.traits ? creature.traits.map(t => t.name).join(", ") : "None")))));
};
exports.default = CreatureDisplay;
