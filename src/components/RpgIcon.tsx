import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaBars,
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
  | "arrowDown"
  | "arrowRotateLeft"
  | "penToSquare"
  | "bars";

export interface RpgIconProps {
  iconType: RpgIconType;
}

export const RpgIcon = ({ iconType }: RpgIconProps) => {
  switch (iconType) {
    case "dice":
      return <FaDice className="w-5 h-5 text-gray-700" />;
    case "eye":
      return <FaEye className="w-5 h-5 text-gray-700" />;
    case "question":
      return <FaQuestion className="w-5 h-5 text-gray-700" />;
    case "female":
      return <FaVenus className="w-5 h-5 text-gray-700" />;
    case "male":
      return <FaMars className="w-5 h-5 text-gray-700" />;
    case "xmark":
      return <FaSquareXmark className="w-5 h-5 text-red-600" />;
    case "arrowRight":
      return <FaArrowRight className="w-5 h-5 text-gray-300" />;
    case "arrowLeft":
      return <FaArrowLeft className="w-5 h-5 text-gray-300" />;
    case "arrowRotateLeft":
      return <FaArrowRotateLeft className="w-5 h-5 text-gray-300" />;
    case "arrowDown":
      return <FaArrowDown className="w-5 h-5 text-gray-300" />;
    case "penToSquare":
      return <FaPenToSquare className="w-5 h-5 text-gray-300" />;
    case "bars":
      return <FaBars className="w-5 h-5 text-gray-300" />;
    default:
      return <FaQuestion className="w-5 h-5 text-gray-700" />;
  }
};
