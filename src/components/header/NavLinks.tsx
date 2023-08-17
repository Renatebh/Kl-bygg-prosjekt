import styles from "./styles/navlinks.module.css";
import { NavLink } from "react-router-dom";
import { MenuProps } from "../../interfaces/menu";

const NavLinks = ({ menuOpen, currentRoute }: MenuProps) => {
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
            Om oss
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
            Prosjekter
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
            Tjenester
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
            Kontakt oss
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
