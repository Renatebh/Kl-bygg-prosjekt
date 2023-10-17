import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import ServiceCards from "../../components/services/ServiceCards";
import styles from "./services.module.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [t] = useTranslation('global');

  return (
    <div className={styles["services-container"]}>
      <section>
        <Navbar />
      </section>
      <section className={styles["cards-section"]}>
        <h1>{t('main.services.headings.headingOne')}</h1>
        <ServiceCards />
      </section>
      <section className={styles["footer"]}>
        <Footer />
      </section>
    </div>
  );
};

export default Services;
