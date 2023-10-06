import styles from "./styles/bigProjectCard.module.css";
import projectsData from "../../translations/no/global.json";
import { Link } from "react-router-dom";
import imageData from "../../images/json/imageData.json";

const BigProjectCard = () => {
  const projects = projectsData.main.projects.projectCards;

  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  const firstProjects = sortedProjects.slice(0, 1);

  return (
    <>
      {firstProjects.map((project) => (
        <div key={project.id} className={styles["card-wrapper"]}>
          <Link to={`/projects/${encodeURIComponent(project.name)}`}>
            {imageData.map((image, index) => {
              if (image.id === project.id) {
                return (
                  <img
                    key={index}
                    className={styles["image"]}
                    src={image.image}
                    alt={image.projectName}
                  />
                );
              }
            })}

            <div className={styles["text-box"]}>
              <h3 className={styles["project-name"]}>{project.name}</h3>
              <p className={styles["project-date"]}> {project.timezone}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BigProjectCard;
