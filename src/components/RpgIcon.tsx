import {
  FaArrowLeft,
  FaArrowRight,
  FaDice,
  FaEye,
  FaMars,
  FaQuestion,
  FaVenus,
} from "react-icons/fa";
import {
  FaArrowRotateLeft,
  FaPenToSquare,
  FaSquareXmark,
} from "react-icons/fa6";

export type RpgIconType =
  | "dice"
  | "eye"
  | "question"
  | "male"
  | "female"
  | "xmark"
  | "arrowRight"
  | "arrowLeft"
  | "arrowRotateLeft"
  | "penToSquare";

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

  const arrowRotateLeft = () => {
    return <FaArrowRotateLeft className="w-5 h-5 text-gray-300" />;
  };

  const penToSQuare = () => {
    return <FaPenToSquare className="w-5 h-5 text-gray-300" />;
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
    case "arrowRotateLeft":
      return arrowRotateLeft();
    case "penToSquare":
      return penToSQuare();
    default:
      return questionIcon();
  }
};
