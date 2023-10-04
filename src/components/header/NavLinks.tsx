import styles from "./styles/navlinks.module.css";
import { NavLink } from "react-router-dom";
import { MenuProps } from "../../interfaces/menu";
import { useTranslation } from "react-i18next";

const NavLinks = ({ menuOpen, currentRoute }: MenuProps) => {
  const [t] = useTranslation("global");

  const isPageActive = (page: string) => currentRoute === page;
  return (
    <nav>
      <ul
        className={
          menuOpen ? styles["navlinks-mobile"] : styles["navlinks-web"]
        }
      >
        <li>
          <NavLink
            to="/about"
            className={
              isPageActive("/about")
                ? styles["navlinks-active"]
                : styles["navlinks"]
            }
          >
            {t("header.navlinks.about")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={
              isPageActive("/projects")
                ? styles["navlinks-active"]
                : styles["navlinks"]
            }
          >
            {t("header.navlinks.projects")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={
              isPageActive("/services")
                ? styles["navlinks-active"]
                : styles["navlinks"]
            }
          >
            {t("header.navlinks.services")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={
              isPageActive("/contact")
                ? styles["navlinks-active"]
                : styles["navlinks"]
            }
          >
            {t("header.navlinks.contact")}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
