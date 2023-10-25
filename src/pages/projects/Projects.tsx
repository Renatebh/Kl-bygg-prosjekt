import { useEffect } from "react";
import ContactBlock from "../../components/contactBlock/ContactBlock";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import BigProjectCard from "../../components/projects/BigProjectCard";
import ProjectsCards from "../../components/projects/ProjectsCards";
import styles from "./projects.module.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles["projects-container"]}>
      <section className={styles["nav"]}>
        <Navbar />
      </section>
      <section className={`${styles["section-spacing"]} ${styles["big-card"]}`}>
        <h1>Våre prosjekter</h1>
        <BigProjectCard />
      </section>
      <section
        className={`${styles["section-spacing"]} ${styles["small-cards-container"]}`}
      >
        <ProjectsCards numberOfCards={19} />
      </section>
      <section
        className={`${styles["contact-block"]} ${styles["section-spacing"]}`}
     
      >
        <ContactBlock />
      </section>
      <section className={`${styles["section-spacing"]} ${styles["footer"]}`}>
        <Footer />
      </section>
    </div>
  );
};

export default Projects;
