import pick from "lodash/pick";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import Hero from "./components/Hero";
import Keyboard from "./components/Keyboard";
import CTA from "./components/CTA";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Index() {
  const t = useTranslations();
  const messages = useMessages();

  return (
    <div>
      <h2
        style={{
          boxShadow: "0px 0px 26px 0px rgba(0,0,0,0.39) inset",
          height: "2rem",
        }}
        className="flex justify-center shrink-0 bg-primary items-center mb-4 text-normal font-extrabold tracking-tight leading-none text-white md:text-normal lg:text-normal dark:text-white"
      >
        لوحة الكتابة بالعربية
      </h2>
      <NextIntlClientProvider messages={pick(messages, "buttons")}>
        <Keyboard />
      </NextIntlClientProvider>
      <Hero />
      <CTA />
      <Faq
        title={t("faq.title")}
        desc={t("faq.desc")}
        firstQuestion={t("faq.firstQuestion")}
        firstAnswer={t("faq.firstAnswer")}
        secondQuestion={t("faq.secondQuestion")}
        secondAnswer={t("faq.secondAnswer")}
        thirdQuestion={t("faq.thirdQuestion")}
        thirdAnswer={t.rich("faq.thirdAnswer", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      />
    </div>
  );
}
