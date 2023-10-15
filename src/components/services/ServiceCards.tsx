import React from "react";
import { useTranslation } from "react-i18next";
import { ServiceItem } from "../../interfaces/serviceItem";
import baseImage from "../../images/serviceImages/service-image.jpg";
import styles from "./styles/serviceCards.module.css";
import { LiaHammerSolid, LiaToolsSolid, LiaTrashAlt } from "react-icons/lia";
import { FaHardHat } from "react-icons/fa";
import { BsBoxFill, BsBricks } from "react-icons/bs";
import { IconComponents } from "../../interfaces/iconComponents";

const iconComponents: IconComponents = {
  LiaHammerSolid,
  LiaToolsSolid,
  BsBricks,
  LiaTrashAlt,
  FaHardHat,
  BsBoxFill,
};

const ServiceCards = () => {
  const [t, i18n] = useTranslation("global");
  console.log(i18n.getDataByLanguage("no"));

  const serviceData = t("main.services.service", {
    returnObjects: true,
  }) as Array<ServiceItem>;

  console.log(serviceData);
  return (
    <div className={styles["card-container"]}>
      {serviceData.map((service) => {
        const IconComponent = iconComponents[service.icon];
        return (
          <div key={service.id} className={styles["card-wrapper"]}>
            <div className={styles["card-text"]}>
              {IconComponent &&
                React.createElement(
                  IconComponent,
                  { size: 70, className: styles["card-icon"] },
                  null
                )}

              <h3>{service.header}</h3>
              <p>{service.description}</p>
              <p>{service.longDescription}</p>
            </div>
            <div className={styles["image-wrapper"]}>
              <img
                src={baseImage.replace(
                  "service-image.jpg",
                  service.serviceImage
                )}
                alt={service.header}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCards;
