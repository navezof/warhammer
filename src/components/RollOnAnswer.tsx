import { RpgIcon, RpgIconType } from "./RpgIcon";

type RollOnAnswerProps = {
  answer: string | null;
  handleClick: () => void;
  icon?: RpgIconType;
};

export const RollOnAnswer = ({
  handleClick,
  answer,
  icon = "question",
}: RollOnAnswerProps) => {
  return (
    <button onClick={handleClick}>
      {answer ? (
        <div className="text-m font-bold text-center p-2 w-full bg-gray-50">
          {answer}
        </div>
      ) : (
        <RpgIcon iconType={icon} />
      )}
    </button>
  );
};
