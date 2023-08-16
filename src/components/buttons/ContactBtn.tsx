import { Link } from "react-router-dom";
import styles from "./styles/contactBtn.module.css";

const ContactBtn = () => {
  return (
    <Link to="/contact" className={styles["contact-btn"]}>
      Kontakt oss
    </Link>
  );
};

export default ContactBtn;
