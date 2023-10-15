import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import ServiceCards from "../../components/services/ServiceCards";
import styles from "./services.module.css";

const Services = () => {
  return (
    <div className={styles["services-container"]}>
      <section>
        <Navbar />
      </section>
      <section className={styles["cards-section"]}>
        <h1>Våre tjenester</h1>
        <ServiceCards />
      </section>
      <section className={styles["footer"]}>
        <Footer />
      </section>
    </div>
  );
};

export default Services;
