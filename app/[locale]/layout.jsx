import { pick } from "lodash";

import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function LocaleLayout({ children, params: { locale } }) {
  const t = useTranslations();

  return (
    <NextIntlClientProvider locale={locale}>
      <Header
        home={t("header.home")}
        about={t("header.about")}
        services={t("header.services")}
        privacy={t("header.privacy")}
        contact={t("header.contact")}
      />

      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
