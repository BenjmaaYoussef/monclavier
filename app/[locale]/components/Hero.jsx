import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="bg-secondary dark:bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div
          className="cursor-default inline-flex justify-between items-center py-1 px-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-sm font-medium">{t("hero.subtitle")}</span>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl dark:text-gray-900">
          {t("hero.main")}
        </h1>
      </div>
    </section>
  );
}
