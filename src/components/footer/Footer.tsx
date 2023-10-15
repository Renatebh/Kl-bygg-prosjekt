import { FaFacebookSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./styles/footer.module.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global");
  // console.log(i18n.getDataByLanguage("no"));
  const headings = t("footer.headings", {
    returnObjects: true,
  }) as string[];

  const information = headings[0];
  const links = headings[1];
  const followUs = headings[2];

  return (
    <div className={styles["footer-container"]}>
      <div>
        <img src={logo} alt="logo" />
        <p>{t("footer.text")}</p>
      </div>
      <div>
        <h4>{information}</h4>
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
      <div>
        <h4>{links}</h4>
        <ul>
          <li>
            <Link to={"/about"}>{t("header.navlinks.about")}</Link>
          </li>
          <li>
            <Link to={"/projects"}>{t("header.navlinks.projects")}</Link>
          </li>
          <li>
            <Link to={"/services"}>{t("header.navlinks.services")}</Link>
          </li>
          <li>
            <Link to={"/contact"}>{t("header.navlinks.contact")}</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>{followUs}</h4>
        <FaFacebookSquare size={40} />
      </div>
    </div>
  );
};

export default Footer;
