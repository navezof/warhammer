import React from 'react';
import { Creature } from '../../types/type';
import { generateCreature } from './generateCreature';
import { creatureTypes } from './data/creatureType';

const CreatureDisplay: React.FC = () => {
  const [selectedType, setSelectedType] = React.useState<string | undefined>();
  const [creature, setCreature] = React.useState<Creature | null>(null);

  const handleClick = () => {
    const newCreature = generateCreature(selectedType);
    setCreature(newCreature);
  };

  return (
    <>
      <div>
        <select
          id='creatureTypeSelect'
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value || undefined);
          }}
        >
          <option value=''>Random</option>
          {creatureTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleClick}>Generate Creature</button>
      </div>
      {creature && (
        <div>
          <h2>{creature.name}</h2>
          <p>
            M {creature.characteristics.movement} | WS{' '}
            {creature.characteristics.weaponSkill} | BS{' '}
            {creature.characteristics.ballisticSkill} | S{' '}
            {creature.characteristics.strength} | T{' '}
            {creature.characteristics.toughness} | W{' '}
            {creature.characteristics.wounds}
          </p>
          <p>
            Traits:{' '}
            {creature.traits
              ? creature.traits.map((t) => t.name).join(', ')
              : 'None'}
          </p>
        </div>
      )}
    </>
  );
};

export default CreatureDisplay;
