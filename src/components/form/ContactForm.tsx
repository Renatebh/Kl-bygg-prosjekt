import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styles from "./styles/contactForm.module.css";

const ContactForm = () => {
  const [t] = useTranslation("global");
  // console.log(i18n.getDataByLanguage("no"));

  type FormData = {
    name: string;
    email: string;
    textmessage: string;
  };

  const schema: ZodType<FormData> = z.object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(30)
      .trim(),
    email: z
      .string()
      .email({ message: "Please enter a valid email" })
      .min(5)
      .trim(),
    textmessage: z.string().max(5000).trim(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      action="post"
      onSubmit={handleSubmit(submitData)}
      className={styles["form"]}
    >
      <h3>{t("main.contact.contactForm.heading")}</h3>
      <div className={styles["form-text"]}>
        <p>{t("main.contact.contactForm.problems")}</p>
        <p>{t("main.contact.contactForm.contactUs")}</p>
      </div>

      <input
        type="text"
        placeholder={t("main.contact.contactForm.inputName")}
        {...register("name")}
      />
      {errors.name && <span>{errors.name.message}</span>}
      <input
        type="email"
        placeholder={t("main.contact.contactForm.inputEmail")}
        {...register("email")}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <textarea
        cols={30}
        rows={10}
        placeholder={t("main.contact.contactForm.inputMessage")}
        {...register("textmessage")}
      />
      {errors.textmessage && <span>{errors.textmessage.message}</span>}
      <button type="submit">{t("main.contact.contactForm.button")}</button>
    </form>
  );
};

export default ContactForm;

// function zodResolver(schema: ZodType<FormData>): any {
//   return async (values: FormData) => {
//     try {
//       // Attempt to validate the form data with Zod schema
//       await schema.parseAsync(values);
//       return {
//         values,
//         errors: {},
//       };
//     } catch (error) {
//       // If validation fails, return the error messages
//       return {
//         values: {},
//         errors: {},
//       };
//     }
//   };
// }
