import logo from "../../images/logo.png";
import styles from "./styles/logo.module.css";

const Logo = () => {
  return (
    <div className={styles["logo-wrapper"]}>
      <a href="/">
        <img src={logo} alt="Bildet av logoen" className={styles["logo-img"]} />
      </a>
    </div>
  );
};

export default Logo;
