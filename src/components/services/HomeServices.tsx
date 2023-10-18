import React from "react";
import { LiaHammerSolid, LiaToolsSolid, LiaTrashAlt } from "react-icons/lia";
import { FaHardHat } from "react-icons/fa";
import { BsBoxFill, BsBricks } from "react-icons/bs";
import styles from "./styles/homeSevices.module.css";
import { useTranslation } from "react-i18next";
import { ServiceItem } from "../../interfaces/serviceItem";
import { IconComponents } from "../../interfaces/iconComponents";

const iconComponents: IconComponents = {
  LiaHammerSolid,
  LiaToolsSolid,
  BsBricks,
  LiaTrashAlt,
  FaHardHat,
  BsBoxFill,
};

const HomeServices = () => {
  const [t] = useTranslation("global");

  const homeServicesData = t("main.services.service", {
    returnObjects: true,
  }) as Array<ServiceItem>;

  return (
    <div className={styles["homeServices-container"]}>
      <h2 className={styles["our-services-heading"]}>
        {t("main.services.headings.headingOne")}
      </h2>
      <p className={styles["headline"]}>
        {t("main.services.headings.headingTwo")}
      </p>
      <div className={styles["card-container"]}>
        {homeServicesData.map((data) => {
          const IconComponent = iconComponents[data.icon];
          return (
            <div key={data.id} className={styles["card-wrapper"]}>
              {IconComponent &&
                React.createElement(
                  IconComponent,
                  { size: 70, className: styles["card-icon"] },
                  null
                )}
              <h3 className={styles["card-header"]}> {data.header}</h3>
              <p className={styles["card-description"]}>{data.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeServices;
