import Navbar from "../../components/header/Navbar";
import styles from "./projects.module.css";
const Projects = () => {
  return (
    <div className={styles["projects-container"]}>
      <h1>Projects</h1>

      <Navbar />
    </div>
  );
};

export default Projects;
