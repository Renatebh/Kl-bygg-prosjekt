import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../imageSlider/ImageSlider";
import Icons from "../icons/Icons";
import styles from "./styles/singleProject.module.css";
import { useTranslation } from "react-i18next";
import { projectCardProps } from "../../interfaces/projectCardProps";
import projectCardImageData from "../../images/json/imageData.json";
import { ProjectImageProps } from "../../interfaces/projectImage";

const SingleProject = () => {
  const [t] = useTranslation("global");
  // console.log(i18n.getDataByLanguage("no"));
  const projectCardData: projectCardProps[] = t("main.projects.projectCards", {
    returnObjects: true,
  });

  const projectIdFromParams = useParams().projectId as string;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectCardData.find(
    (project) => project.id.toString() === projectIdFromParams
  );
  const projectImage: ProjectImageProps[] = projectCardImageData.filter(
    (image) => image.id.toString() === projectIdFromParams
  );

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles["single-project-container"]}>
        <div className={styles["image-info-container"]}>
          <img
            src={projectImage[0]?.image}
            alt={`Image of project ${project?.name}`}
            className={styles["image"]}
          />
          <div className={styles["info"]}>
            <h2>{project?.name}</h2>
            <div className={styles["info-top"]}>
              <p>Sted:</p> <p> {project?.location}</p>
            </div>
            <div className={styles["info-top"]}>
              <p>Fase/år: </p>
              <p>{project?.timezone}</p>
            </div>
            <hr className={styles["line"]} />
            {project?.services?.map((service, index) => (
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
          <p>{project?.story}</p>
        </div>
      </div>
      <div className="image-slider">
        <ImageSlider images={projectImage[0]?.images} />
      </div>
    </>
  );
};

export default SingleProject;
