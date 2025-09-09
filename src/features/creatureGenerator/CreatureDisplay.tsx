import React from "react";
import { Creature } from "../../types/type";
import { generateCreature } from "./generateCreature";
import { creatureTypes } from "./data/creatureType";
import TableDropdown from "../../components/TableDropdown";
import { RpgIcon } from "../../components/RpgIcon";

const CreatureDisplay: React.FC = () => {
  const [selectedType, setSelectedType] = React.useState<string | undefined>();
  const [creature, setCreature] = React.useState<Creature | null>(null);

  const handleClick = () => {
    const newCreature = generateCreature(selectedType);
    setCreature(newCreature);
  };

  const CreatureSelector = () => {
    return (
      <select
        className="p-2 text-white bg-gray-800 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
        id="creatureTypeSelect"
        value={selectedType}
        onChange={(e) => {
          setSelectedType(e.target.value || undefined);
        }}
      >
        <option value="">Random</option>
        {creatureTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    );
  };

  const Display = () => {
    if (!creature) return;
    return (
      <div>
        <h2>{creature.name}</h2>
        <p>
          M {creature.characteristics.movement} | WS{" "}
          {creature.characteristics.weaponSkill} | BS{" "}
          {creature.characteristics.ballisticSkill} | S{" "}
          {creature.characteristics.strength} | T{" "}
          {creature.characteristics.toughness} | W{" "}
          {creature.characteristics.wounds}
        </p>
        <p>
          Traits:{" "}
          {creature.traits
            ? creature.traits.map((t) => t.name).join(", ")
            : "None"}
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row justify-center space-x-2">
        <CreatureSelector />{" "}
        <div>
          <button onClick={handleClick}>
            <RpgIcon iconType="dice" />
          </button>{" "}
        </div>
      </div>
      <Display />
    </div>
  );
};

export default CreatureDisplay;
