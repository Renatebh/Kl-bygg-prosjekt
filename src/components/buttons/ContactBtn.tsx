import { Link } from "react-router-dom";
import styles from "./styles/contactBtn.module.css";
import { useTranslation } from "react-i18next";

const ContactBtn = () => {
  const [t] = useTranslation("global");

  return (
    <Link to="/contact" className={styles["contact-btn"]}>
      {t("main.buttons.contactBtn")}
    </Link>
  );
};

export default ContactBtn;
