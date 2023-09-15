import styles from "./styles/bigProjectCard.module.css";
import projects from "../../json/projectsData.json";
import { Link } from "react-router-dom";

const BigProjectCard = () => {
  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });
  const firstProjects = sortedProjects.slice(0, 1);

  return (
    <div>
      {firstProjects.map((project) => (
        <div key={project.id} className={styles["card-wrapper"]}>
          <Link to={`/projects/${encodeURIComponent(project.projectName)}`}>
            <img
              className={styles["image"]}
              src={project.image}
              alt={project.projectName}
            />
            <div className={styles["text-box"]}>
              <h3 className={styles["project-name"]}>{project.projectName}</h3>
              <p className={styles["project-date"]}> {project.date}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BigProjectCard;
