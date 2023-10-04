import { useState } from "react";
import styles from "./styles/navlinks.module.css";
import { useTranslation } from "react-i18next";

const ChangeLanguageBtn = () => {
  const { i18n } = useTranslation();
  const [buttonName, setButtonName] = useState(
    i18n.language === "pl" ? "NO" : "PL"
  );

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setButtonName(lang === "pl" ? "NO" : "PL");
  };

  return (
    <>
      <button
        className={styles["changeLanguage-btn"]}
        onClick={() =>
          handleChangeLanguage(i18n.language === "pl" ? "no" : "pl")
        }
      >
        {buttonName}
      </button>
    </>
  );
};

export default ChangeLanguageBtn;
