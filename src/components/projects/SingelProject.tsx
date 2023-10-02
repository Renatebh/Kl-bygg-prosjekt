import { useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../../json/projectsData.json";
import ImageSlider from "../imageSlider/ImageSlider";
import Icons from "../icons/Icons";
import styles from "./styles/singleProject.module.css";

const SingleProject = () => {
  const { projectName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find(
    (project) => project.projectName === projectName
  );

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
            className={styles["image"]}
          />
          <div className={styles["info"]}>
            <h2>{project?.projectName}</h2>
            <div className={styles["info-top"]}>
              <p>Sted:</p> <p> {project?.location}</p>
            </div>
            <div className={styles["info-top"]}>
              <p>Fase/år: </p>
              <p>{project?.date}</p>
            </div>
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
