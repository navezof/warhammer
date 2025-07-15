import { useState } from "react";
import ChaosDisplay from "../chaos/ChaosDisplay";
import ChaosInput from "../chaos/ChaosInput";
import FateInput from "./FateInput";

export const FateQuestionWidget = () => {
  const [chaos, setChaos] = useState<number>(5);

  return (
    <div>
      <div>
        <div className="p-2">
          <ChaosDisplay chaos={chaos} />
          <ChaosInput chaos={chaos} setChaos={setChaos} />
        </div>
        <div>
          <FateInput chaos={chaos} />
        </div>
      </div>
    </div>
  );
};
