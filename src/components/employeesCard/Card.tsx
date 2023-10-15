import { useTranslation } from "react-i18next";
import styles from "./styles/card.module.css";
import baseImage from "../../images/employeesImages/blank-profile-picture.png";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

interface EmployeesProps {
  image: string;
  role: string;
  name: string;
  email: string;
  phone: string;
}

const Card = () => {
  const [t] = useTranslation("global");

  const employeesData = t("main.contact.employees.employeesData", {
    returnObjects: true,
  }) as Array<EmployeesProps>;

  return (
    <div className={styles["card-container"]}>
      {employeesData.map((employee, index) => (
        <div key={index} className={styles["card-wrapper"]}>
          <img
            src={baseImage.replace("blank-profile-picture.png", employee.image)}
            alt={employee.name}
          />
          <div className={styles["card-text"]}>
            <p>{employee.name}</p>
            <p>{employee.role}</p>
            <p className={styles["email-phone"]}>
              <IoMdMail />
              {employee.email}
            </p>
            <p className={styles["email-phone"]}>
              <BsTelephoneFill />
              {employee.phone}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
