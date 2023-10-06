import ContactBtn from "../buttons/ContactBtn";
import styles from "./styles/contactBlock.module.css";
import { useTranslation } from "react-i18next";

const ContactBlock = () => {
  const [t] = useTranslation("global");
  return (
    <div className={styles["contactblock-container"]}>
      <p>{t("main.contactBlock.message")}</p>
      <ContactBtn />
    </div>
  );
};

export default ContactBlock;
