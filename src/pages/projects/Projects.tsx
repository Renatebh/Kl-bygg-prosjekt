import { useEffect } from "react";
import ContactBlock from "../../components/contactBlock/ContactBlock";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import styles from "./projects.module.css";
import { useTranslation } from "react-i18next";
import SwiperCards from "../../components/projects/projectCards/SwiperCards";

const Projects = () => {
  const [t] = useTranslation("global");


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles["projects-container"]}>
      <section className={styles["nav"]}>
        <Navbar />
      </section>
      <section className={`${styles["projectcard-section"]} ${styles["section-spacing"]}`}>
        <h1>{t('main.projects.headings.headingOne')}</h1>
        <SwiperCards />
      </section>
      <section
        className={`${styles["contact-block"]} ${styles["section-spacing"]}`}>
        <ContactBlock />
      </section>
      <section className={`${styles["section-spacing"]} ${styles["footer"]}`}>
        <Footer />
      </section>
    </div>
  );
};

export default Projects;
