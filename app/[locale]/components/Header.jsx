"use client";
import { useState } from "react";
import { useParams, usePathname as usepathname } from "next/navigation";
import { Link, useRouter, usePathname } from "@/navigation";
export default function Header({ home, about, services, privacy, contact }) {
  const [menu, setMenu] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const lang = usepathname();

  return (
    <header>
      <nav className="bg-back border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <img src="/aaraby.png" style={{ width: "8rem" }} alt="" />
          </Link>
          <div className="flex items-center">
            <button
              data-collapse-toggle="mobile-menu-2"
              onClick={() => setMenu(!menu)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            hidden={menu}
            className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/"
                  className={
                    pathname == "/"
                      ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-gray-400 hover:text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  aria-current="page"
                >
                  {home}
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services"
                  className={
                    pathname == "/our-services"
                      ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-gray-400 hover:text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  {services}
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={
                    pathname == "/about-us"
                      ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-gray-400 hover:text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  {about}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className={
                    pathname == "/privacy-policy"
                      ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-gray-400 hover:text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  {privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={
                    pathname == "/contact-us"
                      ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-gray-400 hover:text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  {contact}
                </Link>
              </li>
            </ul>

            <select
              name=""
              id=""
              className="bg-white rounded-lg lg:ml-6 px-2"
              onChange={(e) => {
                router.replace(pathname, {
                  locale: e.target.value,
                });
              }}
            >
              <option selected={lang.includes("/fr")} value="fr">
                🇫🇷 Français
              </option>
              <option selected={lang.includes("/en")} value="en">
                🇺🇸 English
              </option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}
