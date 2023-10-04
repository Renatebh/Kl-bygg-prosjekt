import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import styles from "./styles/linkProjects.module.css";
import { useTranslation } from "react-i18next";

const LinkProjects = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <Link to="/projects" className={styles["link-content"]}>
        {t("main.projects.link")}
        <BsArrowRight />
      </Link>
    </>
  );
};

export default LinkProjects;
