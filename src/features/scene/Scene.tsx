import SceneAdjustement from "./SceneAdjustement";
import SceneAlterationDisplay from "./SceneAlterationDisplay";
import { useChaos } from "../chaos/useChaos";

export const SceneWidget = () => {
  const { chaos } = useChaos();

  return (
    <div>
      <SceneAlterationDisplay chaos={chaos} />
      <SceneAdjustement />
    </div>
  );
};
