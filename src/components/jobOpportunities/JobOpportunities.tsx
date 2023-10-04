import image from "../../images/klbygg.jpg";
import { Link } from "react-router-dom";
import styles from "./styles/jobOpportunities.module.css";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const JobOpportunities = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles["job-opportunities-container"]}>
      <div className={styles["text-container"]}>
        <h3 className={styles["header"]}>
          {t("main.jobOpportunities.heading")}
        </h3>
        <p className={styles["text"]}>{t("main.jobOpportunities.text")}</p>
        <br />
        <Link to={"/contact"} className={styles["link"]}>
          {t("main.jobOpportunities.link")}
          <BsArrowRight />
        </Link>
      </div>
      <div className={styles["image-container"]}>
        <img
          src={image}
          alt="image of an construction worker"
          className={styles["image"]}
        />
      </div>
    </div>
  );
};

export default JobOpportunities;
