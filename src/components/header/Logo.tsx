import logo from "../../images/logo.png";
import styles from "./styles/logo.module.css";

const Logo = () => {
  return (
    <a href="/">
      <img src={logo} alt="Bildet av logoen" className={styles["logo-img"]} />
    </a>
  );
};

export default Logo;
