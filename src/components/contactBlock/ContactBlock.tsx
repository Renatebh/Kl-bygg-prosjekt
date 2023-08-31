import ContactBtn from "../buttons/ContactBtn";
import styles from "./styles/contactBlock.module.css";

const ContactBlock = () => {
  return (
    <div className={styles["contactblock-container"]}>
      <p>Ønsker du ett uforpliktende tilbud? </p>
      <ContactBtn />
    </div>
  );
};

export default ContactBlock;
