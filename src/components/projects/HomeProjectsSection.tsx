import ProjectsCards from "./ProjectsCards";
import styles from "./styles/homeProjectsSection.module.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const HomeProjectsSection = () => {
  return (
    <>
      <p className={styles["our-projects"]}>Våre prosjekter</p>
      <h2 className={styles["headline"]}>
        I sammarbeid med andre dyktige fagfolk
      </h2>
      <div className={styles["cards-container"]}>
        <ProjectsCards numberOfCards={6} />
        <div className={styles["link-projects"]}>
          <Link to="/projects" className={styles["link-content"]}>
            Flere prosjekter
            <BsArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeProjectsSection;
