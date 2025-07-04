import React from "react";
import { FaDice } from "react-icons/fa";

type RollOnAnswerProps = {
  answer: string | null;
  handleClick: () => void;
};

export const RollOnAnswer = ({ handleClick, answer }: RollOnAnswerProps) => {
  return (
    <button onClick={handleClick}>
      {answer ? (
        <div className="text-m font-bold text-center p-2 w-full bg-gray-50">
          {answer}
        </div>
      ) : (
        <FaDice className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
};
