import { useTranslations } from "next-intl";

export const metadata = {
  title: "Nos Services",
  description: "Découvrez les services que nous offrons.",
};

export default function Page() {
  const t = useTranslations();

  return (
    <div>
      <h1
        style={{
          boxShadow: "0px 0px 26px 0px rgba(0,0,0,0.39) inset",
          height: "5rem",
        }}
        className="flex justify-center shrink-0 bg-primary items-center mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl dark:text-white"
      >
        {t("services.title")}
      </h1>
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-12"
      >
        <p
          className="mb-8 text-lg font-normal text-gray-800 lg:text-lg dark:text-gray-400"
          style={{ whiteSpace: "pre-line" }}
        >
          {t.rich("services.desc", {
            strong: (chunks) => {
              return <strong>{chunks}</strong>;
            },
          })}
        </p>
      </div>
    </div>
  );
}
