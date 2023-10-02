import ContactBlock from "../../components/contactBlock/ContactBlock";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import BigProjectCard from "../../components/projects/BigProjectCard";
import ProjectsCards from "../../components/projects/ProjectsCards";
import styles from "./projects.module.css";
const Projects = () => {
  return (
    <div className={styles["projects-container"]}>
      <section className={styles["nav"]}>
        <Navbar />
      </section>
      <section className={`${styles["section-spacing"]} ${styles["big-card"]}`}>
        <BigProjectCard />
      </section>
      <section
        className={`${styles["section-spacing"]} ${styles["small-cards-container"]}`}
      >
        <ProjectsCards numberOfCards={9} />
      </section>
      <section
        className={`${styles["section-spacing"]} ${styles["contact-block"]}`}
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
