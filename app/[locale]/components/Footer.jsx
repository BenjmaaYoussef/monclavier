import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="p-4 bg-back md:p-8 lg:p-10 dark:bg-white">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="/"
          className="flex justify-center items-center text-2xl font-semibold text-white dark:text-white"
        >
          <img src="/aaraby.png" alt="" width={150} />
        </a>
        <ul className="flex mt-2 flex-wrap justify-center items-center mb-6 text-white dark:text-white">
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6 ">
              {t("header.home")}
            </Link>
          </li>
          <li>
            <Link
              href="/our-services"
              className="mr-4 hover:underline md:mr-6 "
            >
              {t("services.title")}
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="mr-4 hover:underline md:mr-6 ">
              {t("about.title")}
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="mr-4 hover:underline md:mr-6 "
            >
              {t("privacy.title")}
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:underline">
              {t("contact.title")}
            </Link>
          </li>
        </ul>
        <span className="text-sm text-white sm:text-center dark:text-white">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Aaraby Studio™
          </a>
          . {t("footer.rights")}.
        </span>
      </div>
    </footer>
  );
}
