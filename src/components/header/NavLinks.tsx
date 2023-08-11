import styles from "./styles/navlinks.module.css";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav>
      <ul className={styles["navlinks-container"]}>
        <li>
          <Link to="/about" className={styles["navlinks"]}>
            Om oss
          </Link>
        </li>
        <li>
          <Link to="/projects" className={styles["navlinks"]}>
            Prosjekter
          </Link>
        </li>
        <li>
          <Link to="/services" className={styles["navlinks"]}>
            Tjenester
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles["navlinks"]}>
            Kontakt oss
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
