import ContactBlock from "../../components/contactBlock/ContactBlock";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import SingelProject from "../../components/projects/singleProjectView/SingelProject";
import Slider from "../../components/projects/singleProjectView/ImageSliderInSingleProjects";
import styles from "./projectDetails.module.css";
import { useParams } from "react-router-dom";
import projectCardImageData from "../../images/projectImages/json/imageData.json";
import { ProjectImageProps } from "../../interfaces/projectImage";


const ProjectDetails = () => {
  const projectIdFromParams = useParams().projectId as string;

  const projectImage: ProjectImageProps[] = projectCardImageData.filter(
    (image) => image.id.toString() === projectIdFromParams
  );

const projectName = projectCardImageData.find((project) => project.id.toString() === projectIdFromParams)?.projectName || '';

  return (
    <div className={styles["grid-container"]}>
      <section className={`${styles["nav"]}`}>
        <Navbar />
      </section>
      <section className={`${styles["single-project"]} ${styles["section-spacing"]}`}>
        <SingelProject />
      </section>
      <section className={`${styles["slider"]} ${styles["section-spacing"]}`}>
        <Slider images={projectImage[0]?.images} projectName={projectName} />
      </section>
      <section
        className={`${styles["contact-block"]} ${styles["section-spacing"]}`}
      >
        <ContactBlock />
      </section>
      <section className={`${styles["footer"]} ${styles["section-spacing"]}`}>
        <Footer />
      </section>
    </div>
  );
};

export default ProjectDetails;
