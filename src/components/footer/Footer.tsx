import { FaFacebookSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-section"]}>
        <img src={logo} alt="logo" />
        <p>
          Har du noen spørsmål? <br /> Ta kontakt med oss.
        </p>
      </div>
      <div className={styles["footer-section"]}>
        <h4>Informasjon</h4>
        <ul>
          <li>
            <address className={styles["list-item"]}>
              <FaMapMarkerAlt />
              Kirkegata 4, 3211 Sandefjord
            </address>
          </li>
          <li>
            <a className={styles["list-item"]} href="+4791840812">
              <BsTelephoneFill />
              +47 918 40 812
            </a>
          </li>
          <li>
            <a className={styles["list-item"]} href="mailto:odd@klbygg.as">
              <IoMdMail />
              odd@klbygg.as
            </a>
          </li>
        </ul>
      </div>
      <div className={styles["footer-section"]}>
        <h4>Linker</h4>
        <ul>
          <li>
            <Link to={"/about"}>Om oss</Link>
          </li>
          <li>
            <Link to={"/projects"}>Prosjekter</Link>
          </li>
          <li>
            <Link to={"/services"}>Tjenester</Link>
          </li>
          <li>
            <Link to={"/contact"}>Kontakt oss</Link>
          </li>
        </ul>
      </div>
      <div className={styles["footer-section"]}>
        <h4>Følg oss</h4>
        <FaFacebookSquare size={40} />
      </div>
    </div>
  );
};

export default Footer;
