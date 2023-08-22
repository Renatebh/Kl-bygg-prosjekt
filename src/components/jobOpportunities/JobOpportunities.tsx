import image from "../../images/klbygg.jpg";
import { Link } from "react-router-dom";
import styles from "./jobOpportunities.module.css";
import { BsArrowRight } from "react-icons/bs";

const JobOpportunities = () => {
  return (
    <div className={styles["job-opportunities-container"]}>
      <div className={styles["text-container"]}>
        <h3 className={styles["header"]}>
          Ønsker du jobb
          <br /> i Kl-bygg?
        </h3>
        <p className={styles["text"]}>
          KL-Bygg både i Oslo og Sandefjord deler kontorer med
          rekrutteringsselskapet HIRE og kursspesialisten SMG kurs. Selv om vi
          er selvstendige selskaper, har både vi og våre kunder stor nytte av
          synergien mellom våre fire søsterselskap.
          <br /> <br />
          Vi rekrutterer kontinuerlig året rundt.
        </p>
        <br />
        <Link to={"/contact"} className={styles["link"]}>
          Registrer din CV
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
