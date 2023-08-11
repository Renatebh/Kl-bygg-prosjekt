import { IoMdMenu } from "react-icons/io";
import styles from "./styles/navlinks.module.css";
import { HamburgerProps } from "../../interfaces/hamburger";

const Hamburger = ({ onClick }: HamburgerProps) => {
  return (
    <button onClick={onClick}>
      <IoMdMenu className={styles["hamburger-menu"]} />
    </button>
  );
};

export default Hamburger;
