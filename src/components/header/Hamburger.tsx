import { IoMdMenu } from "react-icons/io";
import styles from "./styles/hamburger.module.css";
import { HamburgerProps } from "../../interfaces/hamburger";

const Hamburger = ({ onClick }: HamburgerProps) => {
  return (
    <button onClick={onClick} className={styles["hamburger-button"]}>
      <IoMdMenu className={styles["hamburger-icon"]} size={30} />
    </button>
  );
};

export default Hamburger;
