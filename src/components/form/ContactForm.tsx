import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [t, i18n] = useTranslation("global");
  console.log(i18n.getDataByLanguage("no"));

  return (
    <form>
      <h3>{t("main.contact.contactForm.heading")}</h3>
      <p>{t("main.contact.contactForm.problems")}</p>
      <p>{t("main.contact.contactForm.contactUs")}</p>
      <input
        name="name"
        type="text"
        placeholder={t("main.contact.contactForm.inputName")}
      />
      <input
        name="email"
        type="email"
        placeholder={t("main.contact.contactForm.inputEmail")}
      />
      <textarea
        name="message"
        id=""
        cols={30}
        rows={10}
        placeholder={t("main.contact.contactForm.inputMessage")}
      />
      <button type="submit">{t("main.contact.contactForm.button")}</button>
    </form>
  );
};

export default ContactForm;
