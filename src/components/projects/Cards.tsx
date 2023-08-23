import styles from "./styles/cards.module.css";
import projects from "../../json/projects.json";

interface NumberOfCardsProps {
  numberOfCards: number;
}

const Cards = ({ numberOfCards }: NumberOfCardsProps) => {
  console.log(projects);
  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });
  const selectedProjects = sortedProjects.slice(0, numberOfCards);

  return (
    <>
      {selectedProjects.map((project) => (
        <div key={project.id} className={styles["card-wrapper"]}>
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

export default Cards;
