import Navbar from "../../components/header/Navbar";
import HeroSection from "../../components/hero/HeroSection";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles["grid-container"]}>
      <div className={styles["background-image"]}>
        <section className={styles["nav"]}>
          <Navbar />
        </section>

        <section className={`${styles["hero"]} ${styles["section-spacing"]}`}>
          <HeroSection />
        </section>
      </div>
      <section className={`${styles["services"]} ${styles["section-spacing"]}`}>
        Services
      </section>
      <section
        className={`${styles["job-opportunities"]} ${styles["section-spacing"]}`}
      >
        Job opportunities
      </section>
      <section className={`${styles["projects"]} ${styles["section-spacing"]}`}>
        Projects
      </section>
      <footer className={`${styles["footer"]} ${styles["section-spacing"]}`}>
        Footer
      </footer>
    </div>
  );
};

export default Home;
