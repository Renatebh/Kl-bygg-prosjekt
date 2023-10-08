import { useTranslation } from "react-i18next";

const Card = () => {
  const [t, i18n] = useTranslation("global");
  console.log(i18n.getDataByLanguage("no"));
  const employeesData = t("main.contact.employees.employeesData", {
    returnObjects: true,
  });

  console.log(employeesData);
  return (
    <div>
      <p></p>
      <p>Role:</p>
      <p>email:</p>
      <p>Phone:</p>
    </div>
  );
};

export default Card;
