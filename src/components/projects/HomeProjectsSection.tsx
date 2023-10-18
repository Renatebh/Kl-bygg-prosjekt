import { useTranslation } from "react-i18next";
import LinkProjects from "../links/LinkProjects";
import ProjectsCards from "./ProjectsCards";
import styles from "./styles/homeProjectsSection.module.css";

const HomeProjectsSection = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <p className={styles["our-projects"]}>
        {t("main.projects.headings.headingOne")}
      </p>
      <h2 className={styles["headline"]}>
        {t("main.projects.headings.headingTwo")}
      </h2>
      <div >
        <ProjectsCards numberOfCards={7} />
      </div>
      <div className={styles["link-projects"]}>
        <LinkProjects />
      </div>
    </>
  );
};

export default HomeProjectsSection;
