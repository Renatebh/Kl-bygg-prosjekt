import { LiaHammerSolid, LiaToolsSolid, LiaTrashAlt } from "react-icons/lia";
import { FaHardHat } from "react-icons/fa";
import { BsBoxFill, BsBricks } from "react-icons/bs";

interface IconProps {
  iconName: string;
  className?: string;
}

const Icons = ({ iconName, className }: IconProps) => {
  const iconMapping: { [key: string]: React.ElementType } = {
    LiaHammerSolid,
    LiaToolsSolid,
    LiaTrashAlt,
    FaHardHat,
    BsBoxFill,
    BsBricks,
  };

  const IconComponent = iconMapping[iconName];

  if (IconComponent) {
    return <IconComponent className={className} />;
  } else {
    return null;
  }
};

export default Icons;
