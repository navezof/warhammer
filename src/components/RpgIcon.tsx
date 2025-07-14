import {
  FaArrowLeft,
  FaArrowRight,
  FaDice,
  FaEye,
  FaMars,
  FaQuestion,
  FaVenus,
} from "react-icons/fa";
import { FaSquareXmark } from "react-icons/fa6";

export type RpgIconType =
  | "dice"
  | "eye"
  | "question"
  | "male"
  | "female"
  | "xmark"
  | "arrowRight"
  | "arrowLeft";

export interface RpgIconProps {
  iconType: RpgIconType;
}

export const RpgIcon = ({ iconType }: RpgIconProps) => {
  const diceIcon = () => {
    return <FaDice className="w-5 h-5 text-gray-700" />;
  };

  const questionIcon = () => {
    return <FaQuestion className="w-5 h-5 text-gray-700" />;
  };

  const eyeIcon = () => {
    return <FaEye className="w-5 h-5 text-gray-700" />;
  };

  const femaleIcon = () => {
    return <FaVenus className="w-5 h-5 text-gray-700" />;
  };

  const maleIcon = () => {
    return <FaMars className="w-5 h-5 text-gray-700" />;
  };

  const xMarkIcon = () => {
    return <FaSquareXmark className="w-5 h-5 text-red-600" />;
  };

  const arrowRight = () => {
    return <FaArrowRight className="w-5 h-5 text-gray-300" />;
  };

  const arrowLeft = () => {
    return <FaArrowLeft className="w-5 h-5 text-gray-300" />;
  };

  switch (iconType) {
    case "dice":
      return diceIcon();
    case "eye":
      return eyeIcon();
    case "question":
      return questionIcon();
    case "female":
      return femaleIcon();
    case "male":
      return maleIcon();
    case "xmark":
      return xMarkIcon();
    case "arrowRight":
      return arrowRight();
    case "arrowLeft":
      return arrowLeft();
    default:
      return questionIcon();
  }
};
