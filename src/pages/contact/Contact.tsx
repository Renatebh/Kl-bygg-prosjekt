import Navbar from "../../components/header/Navbar";
import { useTranslation } from "react-i18next";
import styles from "./styles/contact.module.css";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/form/ContactForm";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const [t, i18n] = useTranslation("global");
  console.log(i18n.getDataByLanguage("no"));

  return (
    <div className={styles["contact-container"]}>
      <div className={styles["background-image"]}>
        <section className={styles["nav-section"]}>
          <Navbar />
        </section>
        <section className={styles["heading-section"]}>
          <h1>{t("main.contact.heading")}</h1>
          <p>{t("main.contact.subHeading")}</p>
        </section>
      </div>

      <section className={styles["form-section"]}>
        <div className={styles["contact-info"]}>
          <h3>{t("main.contact.contactInfo.heading")}</h3>
          <div>
            <a className={styles["list-item"]} href="+4791840812">
              <BsTelephoneFill />
              +47 918 40 812
            </a>
            <a className={styles["list-item"]} href="mailto:odd@klbygg.as">
              <IoMdMail />
              odd@klbygg.as
            </a>
          </div>
          <p>{t("main.contact.contactInfo.text")}</p>
        </div>
        <div className={styles["form-div"]}>
          <ContactForm />
        </div>
      </section>
      <section></section>
      <section className={styles["footer"]}>
        <Footer />
      </section>
    </div>
  );
};

export default Contact;
