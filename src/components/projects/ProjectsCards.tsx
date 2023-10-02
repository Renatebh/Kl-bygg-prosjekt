import styles from "./styles/projectCards.module.css";
import projects from "../../json/projectsData.json";
import { useNavigate } from "react-router-dom";

interface NumberOfCardsProps {
  numberOfCards: number;
}

const ProjectsCards = ({ numberOfCards }: NumberOfCardsProps) => {
  const navigate = useNavigate();

  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });
  const selectedProjects = sortedProjects.slice(0, numberOfCards);

  const handleCardClick = (projectName: string) => {
    navigate(`/projects/${projectName}`);
  };

  return (
    <>
      {selectedProjects.map((project) => (
        <div
          key={project.id}
          className={styles["card-wrapper"]}
          onClick={() => handleCardClick(project.projectName)}
        >
          <img
            className={styles["image"]}
            src={project.image}
            alt={project.projectName}
          />
          <div className={styles["text-box"]}>
            <h3 className={styles["project-name"]}>{project.projectName}</h3>
            <p className={styles["project-date"]}> {project.date}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectsCards;
