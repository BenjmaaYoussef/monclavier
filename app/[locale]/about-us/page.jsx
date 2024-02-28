import { useTranslations } from "next-intl";

export const metadata = {
  title: "A propos de nous",
  description:
    "Bienvenue chez Aaraby Studio, votre destination de choix pour une expérience incomparable de saisie et écriture en Arabe en utilisant un clavier Arabe virtuel.",
};

function Page() {
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
        {t("about.title")}
      </h1>
      <section className="bg-white dark:bg-gray-900">
        <div
          className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-12 text-lg"
          style={{ whiteSpace: "pre-line" }}
        >
          {t.rich("about.desc", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </div>
      </section>
    </div>
  );
}

export default Page;
