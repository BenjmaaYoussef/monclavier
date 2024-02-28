"use client";
import { useState } from "react";

export default function Faq({
  title,
  desc,
  firstQuestion,
  firstAnswer,
  secondQuestion,
  secondAnswer,
  thirdQuestion,
  thirdAnswer,
}) {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
        <div className="flex gap-2 text-primary flex-col justify-center items-center">
          <svg
            className="w-[5rem] h-[5rem]  dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.5 10a2.5 2.5 0 1 1 5 .2 2.4 2.4 0 0 1-2.5 2.4V14m0 3h0m9-5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <h1 className=" text-center mb-6 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-5xl dark:text-white">
            {title}
          </h1>
        </div>
        <p className=" text-center mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {desc}
        </p>
        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              onClick={() => {
                setFirst(!first);
              }}
              className={
                !first
                  ? "flex items-center rounded-lg mt-3 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  : "flex items-center rounded-t-lg border-b-0 mt-3 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              }
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-2"
            >
              <span>{firstQuestion}</span>
              {first ? (
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m5 15 7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              )}
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className={!first && "hidden"}
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="p-5 border border-t-0 rounded-b-lg border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {firstAnswer}
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              onClick={() => {
                setSecond(!second);
              }}
              className={
                !second
                  ? "flex items-center rounded-lg mt-3 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  : "flex items-center rounded-t-lg border-b-0 mt-3 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              }
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-2"
            >
              <span>{secondQuestion}</span>
              {second ? (
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m5 15 7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              )}
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className={!second && "hidden"}
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="p-5 border border-t-0 rounded-b-lg border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {secondAnswer}
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              onClick={() => {
                setThird(!third);
              }}
              className={
                !third
                  ? "flex items-center rounded-lg mt-3 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  : "flex items-center rounded-t-lg border-b-0 mt-3 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              }
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-2"
            >
              <span>{thirdQuestion}</span>
              {third ? (
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m5 15 7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              )}
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className={!third && "hidden"}
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="p-5 border border-t-0 rounded-b-lg border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400 whitespace-pre-line">
                {thirdAnswer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
