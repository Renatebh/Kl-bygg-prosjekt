import ContactBtn from "../buttons/ContactBtn";
import styles from "./styles/herosection.module.css";

const HeroSection = () => {
  return (
    <div className={styles["hero-container"]}>
      <div>
        <h1 className={styles["hero-heading"]}>
          KL-bygg er opptatt av
          <br /> høy kvalitet og godt sammarbeid
        </h1>
        <p className={styles["hero-paragraph"]}>
          Kontakt oss nå for en hyggelig prat eller send oss en epost
          <br /> og vi kontakter deg så snart vi kan
        </p>
      </div>
      <div>
        <ContactBtn />
      </div>
    </div>
  );
};

export default HeroSection;
