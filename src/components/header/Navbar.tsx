import { useState } from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import ChangeLanguageBtn from "./ChangeLanguageBtn";
import styles from "./styles/navbar.module.css";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("menuOpen in Navbar:", menuOpen);
  };

 
  return (
    <header className={styles["header-container"]}>
      <Logo />
      <div className={styles["header-links"]}>
        <Hamburger onClick={toggleMenu} menuOpen={menuOpen}/>
        <NavLinks currentRoute={window.location.pathname} menuOpen={menuOpen} />
        <ChangeLanguageBtn />
      </div>
    </header>
  );
};

export default Navbar;
