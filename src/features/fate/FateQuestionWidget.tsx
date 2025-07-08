import ChaosDisplay from "../chaos/ChaosDisplay";
import ChaosInput from "../chaos/ChaosInput";
import FateInput from "./FateInput";

export const FateQuestionWidget = () => {
  return (
    <div>
      <div>
        <div className="p-2">
          <ChaosDisplay />
          <ChaosInput />
        </div>
        <div>
          <FateInput />
        </div>
      </div>
    </div>
  );
};
