import React from "react";
import { LiaHammerSolid, LiaToolsSolid, LiaTrashAlt } from "react-icons/lia";
import { FaHardHat } from "react-icons/fa";
import { BsBoxFill, BsBricks } from "react-icons/bs";
import styles from "./homeSevices.module.css";
import homeServicesData from "../../json/homeServices.json";

interface IconComponents {
  [key: string]: React.ElementType;
}

const iconComponents: IconComponents = {
  LiaHammerSolid,
  LiaToolsSolid,
  BsBricks,
  LiaTrashAlt,
  FaHardHat,
  BsBoxFill,
};

const HomeServices = () => {
  return (
    <div className={styles["homeServices-container"]}>
      <p className={styles["our-services"]}>Våre tjenester</p>
      <h2 className={styles["headline"]}>Vi bygger for din komfort</h2>
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
