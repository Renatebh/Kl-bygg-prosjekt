import styles from "./styles/projectCards.module.css";
import { useNavigate } from "react-router-dom";
import projectsData from "../../translations/no/global.json";
import imageData from "../../images/json/imageData.json";

interface NumberOfCardsProps {
  numberOfCards: number;
}

const ProjectsCards = ({ numberOfCards }: NumberOfCardsProps) => {
  const navigate = useNavigate();

  const projects = projectsData.main.projects.projectCards;

  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  const selectedProjects = sortedProjects.slice(1, numberOfCards);

  const handleCardClick = (id: number) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className={styles["card-container"]}>
      {selectedProjects.map((project) => (
        <div
          key={project.id}
          className={styles["card-wrapper"]}
          onClick={() => handleCardClick(project.id)}
        >
          {imageData.map((image, index) => {
            if (image.id === project.id) {
              return (
                <img
                  key={index}
                  className={styles["image"]}
                  src={image.image}
                  alt={project.name}
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
    </div>
  );
};

export default ProjectsCards;
