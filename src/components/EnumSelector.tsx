import React from "react";

type EnumSelectorProps<T extends string> = {
  enumObject: { [key in T]: string };
  value: T;
  onChange: (value: T) => void;
  label?: string;
};

function EnumSelector<T extends string>({
  enumObject,
  value,
  onChange,
  label,
}: EnumSelectorProps<T>) {
  const options = Object.values(enumObject) as T[];

  return (
    <>
      <div>
        {label && <label>{label} </label>}
        <select value={value} onChange={(e) => onChange(e.target.value as T)}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default EnumSelector;
