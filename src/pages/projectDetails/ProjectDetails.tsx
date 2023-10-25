import ContactBlock from "../../components/contactBlock/ContactBlock";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import SingelProject from "../../components/projects/SingelProject";
import styles from "./projectDetails.module.css";

const ProjectDetails = () => {
  return (
    <div className={styles["grid-container"]}>
      <section className={`${styles["nav"]}`}>
        <Navbar />
      </section>
      <section className={`${styles["single-project"]} ${styles["section-spacing"]}`}>
        <SingelProject />
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
