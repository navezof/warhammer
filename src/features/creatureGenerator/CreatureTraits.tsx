import { AppliedTrait } from "../../types/type";

type CreatureTraitsProps = {
  creatureTraits: AppliedTrait[] | undefined;
};

export const CreatureTraits = ({ creatureTraits }: CreatureTraitsProps) => {
  return (
    <p>
      Traits:{" "}
      {creatureTraits ? creatureTraits.map((t) => t.name).join(", ") : "None"}
    </p>
  );
};
