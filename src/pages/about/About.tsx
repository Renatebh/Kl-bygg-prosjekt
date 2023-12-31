import ContactBlock from "../../components/contactBlock/ContactBlock";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import styles from "./styles/about.module.css";
import { useTranslation } from "react-i18next";
import imageOne from "../../images/imagesForPages/construction-worke.jpg";
import imageTwo from "../../images/imagesForPages/klbygg.jpg";

const About = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles["about-container"]}>
      <div className={styles["background-image"]}>
        <section className={styles["nav"]}>
          <Navbar />
        </section>
      </div>
      <section className={`${styles["content-container"]} ${styles["section-spacing"]}`}>
        <div className={styles["text-container"]}>
          <h1>{t("main.about.heading")}</h1>
          <p className={styles['for-text']}>{t("main.about.subheading")}</p>
          <p>{t("main.about.text")}</p>
        </div>

        <div className={styles["top-image-wrapper"]}>
          <img src={imageOne} alt="" />
        </div>
        <div className={styles["small-image-container"]}>
          <img src={imageTwo} alt="" />
          <img src={imageTwo} alt="" />
        </div>
      </section>
      <section
        className={`${styles["contact-block"]} ${styles["section-spacing"]}`}
      >
        <ContactBlock />
      </section>
      <footer className={`${styles["footer"]} ${styles["section-spacing"]}`}>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
