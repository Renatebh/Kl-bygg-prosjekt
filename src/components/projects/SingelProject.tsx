import projects from "../../json/projectsData.json";
import { useParams } from "react-router-dom";
import Icons from "../icons/Icons";
import styles from "./styles/singleProject.module.css";
import ImageSlider from "../imageSlider/ImageSlider";

const SingleProject = () => {
  const { name } = useParams();

  const project = projects.find((project) => project.projectName === name);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles["single-project-container"]}>
        <div className={styles["image-info-container"]}>
          <img
            src={project?.image}
            alt={`Image of project ${project?.projectName}`}
            className={styles["big-image"]}
          />
          <div className={styles["project-info"]}>
            <h2>{project?.projectName}</h2>
            <p>Sted: {project?.location}</p>
            <p>Fase/år: {project?.date}</p>
            <hr className={styles["line"]} />
            {project?.projectServices?.services.map((service, index) => (
              <div key={index} className={styles["service-wrapper"]}>
                <Icons
                  iconName={service.icon}
                  className={styles["service-icon"]}
                />
                <p>{service.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["project-story-container"]}>
          <h3>{project?.description}</h3>
          <p>{project?.projectStory}</p>
        </div>
      </div>
      <div className="image-slider">
        <ImageSlider images={project?.projectServices.images} />
      </div>
    </>
  );
};

export default SingleProject;
