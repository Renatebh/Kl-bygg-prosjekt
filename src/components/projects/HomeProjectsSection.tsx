import LinkProjects from "../links/LinkProjects";
import ProjectsCards from "./ProjectsCards";
import styles from "./styles/homeProjectsSection.module.css";

const HomeProjectsSection = () => {
  return (
    <>
      <p className={styles["our-projects"]}>Våre prosjekter</p>
      <h2 className={styles["headline"]}>
        I sammarbeid med andre dyktige fagfolk
      </h2>
      <div className={styles["cards-container"]}>
        <ProjectsCards numberOfCards={6} />
      </div>
      <div className={styles["link-projects"]}>
        <LinkProjects />
      </div>
    </>
  );
};

export default HomeProjectsSection;
