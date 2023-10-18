import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import HeroSection from "../../components/hero/HeroSection";
import JobOpportunities from "../../components/jobOpportunities/JobOpportunities";
import HomeProjectsSection from "../../components/projects/HomeProjectsSection";
import HomeServices from "../../components/services/HomeServices";
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
        <HomeServices />
      </section>
      <section className={`${styles["job-opportunities"]}`}>
        <JobOpportunities />
      </section>
      <section className={`${styles["projects"]} ${styles["section-spacing"]}`}>
        <HomeProjectsSection />
      </section>
      <footer className={`${styles["footer"]} ${styles["section-spacing"]}`}>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
