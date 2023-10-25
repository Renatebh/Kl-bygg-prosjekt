import { IoMdMenu, IoMdClose } from "react-icons/io";
import styles from "./styles/hamburger.module.css";
import { HamburgerProps } from "../../interfaces/hamburger";

const Hamburger = ({ onClick, menuOpen }: HamburgerProps) => {

  return (
    <div>
    <button onClick={onClick} className={styles["hamburger-button"]}>
      {menuOpen && (
        <IoMdClose className={styles["hamburger-icon"]} size={30} />
      ) || (
        <IoMdMenu className={styles["hamburger-icon"]} size={30} />
      )}
    </button>
  </div>
  );
};

export default Hamburger;
