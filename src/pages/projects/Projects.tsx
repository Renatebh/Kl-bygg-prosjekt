import ContactBlock from "../../components/contactBlock/ContactBlock";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import BigProjectCard from "../../components/projects/BigProjectCard";
import ProjectsCards from "../../components/projects/ProjectsCards";
import styles from "./projects.module.css";
const Projects = () => {
  return (
    <div className={styles["projects-container"]}>
      <section>
        <Navbar />
      </section>
      <section>
        <BigProjectCard />
        <ProjectsCards numberOfCards={9} />
      </section>
      <section>
        <ContactBlock />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Projects;
