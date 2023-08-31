import ContactBlock from "../../components/contactBlock/ContactBlock";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import LinkProjects from "../../components/links/LinkProjects";
import ProjectsCards from "../../components/projects/ProjectsCards";
import SingelProject from "../../components/projects/SingelProject";
import styles from "./projectDetails.module.css";

const ProjectDetails = () => {
  return (
    <div className={styles["grid-container"]}>
      <section className={`${styles["nav"]}`}>
        <Navbar />
      </section>
      <section className={styles["single-project"]}>
        <SingelProject />
      </section>
      <section
        className={`${styles["contact-block"]} ${styles["section-spacing"]}`}
      >
        <ContactBlock />
      </section>
      <section
        className={`${styles["project-cards"]} ${styles["section-spacing"]}`}
      >
        <h3>Våre prosjekter</h3>
        <div className={styles["cards-container"]}>
          <ProjectsCards numberOfCards={3} />
        </div>
        <div className={styles[""]}>
          <LinkProjects />
        </div>
      </section>
      <section className={`${styles["footer"]} ${styles["section-spacing"]}`}>
        <Footer />
      </section>
    </div>
  );
};

export default ProjectDetails;
