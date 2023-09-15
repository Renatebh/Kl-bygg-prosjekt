import Navbar from "../../components/header/Navbar";
import Cards from "../../components/projects/ProjectsCards";
import styles from "./services.module.css";

const Services = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <div className={styles["big-project-card"]}></div>

        <div className={styles["small-card-container"]}>
          <Cards numberOfCards={9} />
        </div>
      </section>
    </div>
  );
};

export default Services;
