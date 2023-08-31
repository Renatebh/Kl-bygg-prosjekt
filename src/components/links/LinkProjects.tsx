import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import styles from "./styles/linkProjects.module.css";

const LinkProjects = () => {
  return (
    <>
      <Link to="/projects" className={styles["link-content"]}>
        Flere prosjekter
        <BsArrowRight />
      </Link>
    </>
  );
};

export default LinkProjects;
