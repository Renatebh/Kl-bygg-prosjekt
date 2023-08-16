import ContactBtn from "../buttons/ContactBtn";
import styles from "./styles/herosection.module.css";

const HeroSection = () => {
  return (
    <div className={styles["hero-container"]}>
      <h1>KL-bygg er opptatt av høy kvalitet og godt sammarbeid</h1>
      <p>
        Kontakt oss nå for en hyggelig prat eller send oss en epost og vi
        kontakter deg så snart vi kan
      </p>

      <ContactBtn />
    </div>
  );
};

export default HeroSection;
