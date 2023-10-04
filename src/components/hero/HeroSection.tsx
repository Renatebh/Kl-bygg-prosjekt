import ContactBtn from "../buttons/ContactBtn";
import styles from "./styles/herosection.module.css";

import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles["hero-container"]}>
      <div>
        <h1 className={styles["hero-heading"]}>{t("main.hero.heroHeading")}</h1>
        <p className={styles["hero-paragraph"]}>
          {t("main.hero.heroSubHeading")}
        </p>
      </div>
      <div>
        <ContactBtn />
      </div>
    </div>
  );
};

export default HeroSection;
