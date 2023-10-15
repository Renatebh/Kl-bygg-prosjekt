import Navbar from "../../components/header/Navbar";
import { useTranslation } from "react-i18next";
import styles from "./styles/contact.module.css";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/form/ContactForm";
import EmployeesCard from "../../components/employeesCard/Card";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const [t] = useTranslation("global");
  // console.log(i18n.getDataByLanguage("no"));

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
          <div className={styles["contact-address"]}>
            <p>Sandefjord</p>
            <a className={styles["list-item"]} href="+4791840812">
              <BsTelephoneFill />
              +47 918 40 812
            </a>
            <a className={styles["list-item"]} href="mailto:odd@klbygg.as">
              <IoMdMail />
              odd@klbygg.as
            </a>
          </div>
          <p className={styles["contact-text"]}>
            {t("main.contact.contactInfo.text.paragraph1")}
          </p>
          <br />
          <p className={styles["contact-text"]}>
            {t("main.contact.contactInfo.text.paragraph2")}
          </p>
        </div>
        <div className={styles["form-div"]}>
          <ContactForm />
        </div>
      </section>
      <section className={styles["employees-section"]}>
        <h3>{t("main.contact.employees.heading")}</h3>
        <p className={styles["employees-subheading"]}>
          {t("main.contact.employees.subHeading")}
        </p>
        <EmployeesCard />
      </section>
      <section className={styles["footer"]}>
        <Footer />
      </section>
    </div>
  );
};

export default Contact;
