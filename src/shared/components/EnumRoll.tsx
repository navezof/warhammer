import React from 'react';
import { randomNumber } from '../../utils/utils';

type EnumRollProps<T extends string> = {
  enumObject: { [key in T]: string };
  onChange: (value: T) => void;
  label?: string;
};

function EnumRoll<T extends string>({
  enumObject,
  onChange,
  label,
}: EnumRollProps<T>) {
  const options = Object.values(enumObject) as T[];

  function onHandleClick() {
    const roll = randomNumber(1, options.length);
    onChange(options[roll]);
  }

  return (
    <>
      <button onClick={onHandleClick}>{label}</button>
    </>
  );
}

export default EnumRoll;
