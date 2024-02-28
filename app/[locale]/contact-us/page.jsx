import { useTranslations } from "next-intl";

import Form from "../components/Form";

export const metadata = {
  title: "Contactez nous",
  description: "Vous avez un problème technique? Faites le nous savoir.",
};

export default function Page() {
  const t = useTranslations();

  return (
    <div>
      <div
        style={{
          boxShadow: "0px 0px 26px 0px rgba(0,0,0,0.39) inset",
          height: "5rem",
        }}
        className="flex justify-center shrink-0 bg-primary items-center mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl dark:text-white"
      >
        <h1>{t("contact.title")}</h1>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-12">
        <p className="mb-7 font-light text-center text-black dark:text-white text-xl">
          {t("contact.subtitle")}
        </p>
        <Form
          email={t("contact.email")}
          subject={t("contact.subject")}
          message={t("contact.message")}
          messageSent={t("contact.sent")}
          messageSend={t("contact.send")}
        />
      </div>
    </div>
  );
}
