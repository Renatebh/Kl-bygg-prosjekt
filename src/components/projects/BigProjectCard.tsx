import styles from "./styles/bigProjectCard.module.css";
import projectsData from "../../translations/no/global.json";
import imageData from "../../images/projectImages/json/imageData.json";
import { useNavigate } from "react-router-dom";

const BigProjectCard = () => {
  const navigate = useNavigate()
  const projects = projectsData.main.projects.projectCards;

  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  const firstProjects = sortedProjects.slice(0, 1);

  const handleCardClick = (id: number) => {
    navigate(`/projects/${id}`);
  };

  return (
    <>
      {firstProjects.map((project) => (
        <div key={project.id} className={styles["card-wrapper"]} onClick={() => handleCardClick(project.id)}>
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
        
        </div>
      ))}
    </>
  );
};

export default BigProjectCard;
