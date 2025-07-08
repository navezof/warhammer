import {
  FaDice,
  FaEye,
  FaFemale,
  FaMars,
  FaQuestion,
  FaVenus,
} from "react-icons/fa";

export type RpgIconType = "dice" | "eye" | "question" | "male" | "female";

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
    default:
      return questionIcon();
  }
};
