"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const letters = [
  {
    arabic: "ا",
    english: "a",
  },
  {
    arabic: "ب",
    english: "b",
  },
  {
    arabic: "ت",
    english: "t",
  },
  {
    arabic: "ث",
    english: "ت'",
    showing: "t'",
  },
  {
    arabic: "ج",
    english: "j",
  },
  {
    arabic: "ح",
    english: "H",
  },
  {
    arabic: "خ",
    english: "ح'",
    showing: "H'",
  },
  {
    arabic: "د",
    english: "d",
  },
  {
    arabic: "ذ",
    english: "د'",
    showing: "d'",
  },
  {
    arabic: "ر",
    english: "r",
  },
  {
    arabic: "ز",
    english: "z",
  },
  {
    arabic: "س",
    english: "s",
  },
  {
    arabic: "ش",
    english: "س'",
    showing: "s'",
  },
  {
    arabic: "ص",
    english: "S",
  },
  {
    arabic: "ض",
    english: "D",
  },
  {
    arabic: "ط",
    english: "T",
  },
  {
    arabic: "ظ",
    english: "Z",
  },
  {
    arabic: "ع",
    english: "g",
  },
  {
    arabic: "غ",
    english: "ع'",
    showing: "g'",
  },
  {
    arabic: "ف",
    english: "f",
  },
  {
    arabic: "ق",
    english: "q",
  },
  {
    arabic: "ك",
    english: "k",
  },
  {
    arabic: "ل",
    english: "l",
  },
  {
    arabic: "م",
    english: "m",
  },
  {
    arabic: "ن",
    english: "n",
  },
  {
    arabic: "ه",
    english: "h",
  },
  {
    arabic: "و",
    english: "w",
  },
  {
    arabic: "ي",
    english: "y",
  },
  {
    arabic: "ء",
    english: "-",
  },
  {
    arabic: "آ",
    english: "ا'",
    showing: "a'",
  },
  {
    arabic: "أ",
    english: 'ا"',
    showing: 'a"',
  },
  {
    arabic: "إ",
    english: "ا_",
    showing: "a_",
  },
  {
    arabic: "ة",
    english: "ه'",
    showing: "h'",
  },
  {
    arabic: "ؤ",
    english: "و'",
    showing: "w'",
  },
  {
    arabic: "ئ",
    english: "ي'",
    showing: "y'",
  },
  {
    arabic: "ى",
    english: "Y",
  },
  {
    english: "1",
    arabic: "١",
  },
  {
    english: "2",
    arabic: "٢",
  },
  {
    english: "3",
    arabic: "٣",
  },
  {
    english: "4",
    arabic: "٤",
  },
  {
    english: "5",
    arabic: "٥",
  },
  {
    english: "6",
    arabic: "٦",
  },
  {
    english: "7",
    arabic: "٧",
  },
  {
    english: "8",
    arabic: "٨",
  },
  {
    english: "9",
    arabic: "٩",
  },
  {
    english: "0",
    arabic: "٠",
  },
];

const justAdd = [
  "،",
  ".",
  "َ",
  "ً",
  "ُ",
  "ٌ",
  " ْ",
  "ِ",
  "ٍ",
  "ّ",
  ",",
  "-",
  "'",
  '"',
  ":",
  "؟",
  "!",
  ";",
  "%",
];

export default function Keyboard() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState("");
  const [activeIndex, setActiveIndex] = useState(true);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [index, setIndex] = useState(false);
  const [cur, setCur] = useState(0);
  const t = useTranslations();
  const onBlur = (e) => {
    setCur(e.target.selectionStart);
  };
  const textareaRef = useRef();
  useEffect(() => {
    textareaRef.current.setSelectionRange(cur, cur);
    textareaRef.current.focus();
    console.log(cur);
  }, [cur]);
  return (
    <div className="lg:mx-40 md:mx-10 sm:mx-5 mx-5 mt-5 mb-10">
      <textarea
        dir="rtl"
        id="message"
        value={input}
        onChange={(e) => {
          const start = e.currentTarget.selectionEnd;
          let res = e.target.value;
          letters.forEach((el) => {
            res = res.replaceAll(el.english, el.arabic);
          });
          setInput(res);
          setCur(start);
        }}
        ref={textareaRef}
        onBlur={onBlur}
        rows={6}
        className="block p-2.5 w-full text-lg font-bold text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <div className="w-full flex justify-center mt-3">
        <a
          href={input !== "" ? "https://www.google.com/search?q=" + input : ""}
          target="_blank"
          type="button"
          className={`text-black ${
            input === "" ? "bg-gray-100 text-gray-400" : "bg-white"
          }  hover:bg-gray-100 border border-gray-200 focus:ring-4  select-none focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          <span className="hidden sm:block md:block lg:block ml-3">
            {t("buttons.google")}
          </span>
        </a>
        <a
          href={
            input !== "" &&
            "https://www.youtube.com/results?search_query=" + input
          }
          type="button"
          target="_blank"
          className={`text-black ${
            input === "" ? "bg-gray-100 text-gray-400" : "bg-white"
          }  hover:bg-gray-100 border border-gray-200 focus:ring-4  select-none focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
            />
            <path fill="#FFF" d="M20 31L20 17 32 24z" />
          </svg>
          <span className="hidden sm:block md:block lg:block ml-3">
            {t("buttons.youtube")}
          </span>
        </a>
        <a
          href={
            input !== "" &&
            "https://wikipedia.org/w/index.php?fulltext=1&search=" + input
          }
          target="_blank"
          type="button"
          className={`text-black ${
            input === "" ? "bg-gray-100 text-gray-400" : "bg-white"
          }  hover:bg-gray-100 border border-gray-200 focus:ring-4  select-none focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 48 48"
          >
            <path
              fill="#1b1b1b"
              d="M43.426,10.333c-1.612,0-1.544-0.333-4.641-0.333v1.189h0.398c0.808,0.079,3.399,0.591,2.473,2.862	L32.91,34.306l-5.669-11.405l4.801-8.572c0.454-0.694,2.204-3.064,4.958-3.14V10c-2.956,0-3.343,0.333-4.963,0.333	C30.288,10.333,30.361,10,27,10v1.189c0.723,0.065,4.09,0.605,2.862,2.93c-0.093,0.176-0.152,0.32-0.196,0.45l-3.404,6.362	l-3.405-6.851c-0.29-0.773-0.528-2.926,2.219-2.885c-0.016-0.002-0.031-0.003-0.047-0.005h0.366V10c-3.582,0-3.71,0.333-5.673,0.333	c-2.12,0-1.137-0.333-5.21-0.333v1.189h0.209c0.535,0.027,2.453,0.335,4,3.183l5.182,10.969l-4.909,9.174L9.819,14.144	c-0.165-0.609-0.45-2.99,2.473-2.949c-0.017-0.002-0.034-0.003-0.051-0.005H13V10c-3.843,0-4.346,0.333-6.452,0.333	C4.274,10.333,4.37,10,0,10v1.189h0.87L0.42,11.21c0,0,3.375-0.206,5.122,3.67c0.042,0.094,0.087,0.161,0.131,0.245L16.601,40	l1.053,0.016l7.15-12.764L30.826,40l0.098-0.006L30.923,40l0.982,0.016l11.813-25.837c0.438-0.836,1.765-2.918,4.168-2.989H48V10	C45.276,10,44.919,10.333,43.426,10.333z"
            />
          </svg>
          <span className="hidden sm:block md:block lg:block ml-3">
            {t("buttons.wikipedia")}
          </span>
        </a>
        <button
          disabled={input === ""}
          onClick={() => {
            navigator.clipboard.writeText(input);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 3000);
          }}
          type="button"
          className={`text-black ${
            input === "" ? "bg-gray-100 text-gray-400" : "bg-white"
          }  hover:bg-gray-100 border border-gray-200 focus:ring-4  select-none focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2`}
        >
          {copied ? (
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
                d="M15 4h3c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"
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
                d="M15 4h3c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
              />
            </svg>
          )}

          <span className="hidden sm:block md:block lg:block ml-3">
            {copied ? t("buttons.copied") : t("buttons.copy")}
          </span>
        </button>
      </div>
      <div
        dir="rtl"
        className="mt-3 grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 grid-cols-6 gap-2"
      >
        {letters.map((letter) => (
          <div
            key={letter.arabic}
            className="flex grow flex-col justify-center"
          >
            <div className="w-full text-center text-gray-400" dir="ltr">
              {letter.showing ? letter.showing : letter.english}
            </div>
            <button
              type="button"
              onClick={() => {
                setInput(
                  input.substring(0, cur) +
                    letter.arabic +
                    input.substring(cur, input.length)
                );
                setCur(cur + 1);
              }}
              className=" text-red-700 border-gray-400 border-2 w-full text-xl font-bold bg-gray-100 hover:bg-gray-300 rounded-lg px-5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {letter.arabic}
            </button>
          </div>
        ))}

        {justAdd.map((letter, index) => (
          <>
            {index == 6 && (
              <div className="hidden lg:flex grow flex-col justify-center col-span-4">
                <div
                  className="w-full text-center text-gray-400 whitespace-pre"
                  dir="ltr"
                >
                  {" "}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setInput(
                      input.substring(0, cur) +
                        " " +
                        input.substring(cur, input.length)
                    );
                    setCur(cur + 1);
                  }}
                  className=" text-black  border-2 border-gray-400 w-full text-xl font-bold bg-gray-100 hover:bg-gray-300 rounded-lg px-5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  مسافة
                </button>
              </div>
            )}
            <div
              key={index}
              style={{ fontFamily: "Times New Roman" }}
              className="flex grow flex-col justify-center"
            >
              <div
                className="w-full text-center text-gray-400"
                dir="ltr"
                style={letter != "ْ" ? { whiteSpace: "pre-wrap" } : {}}
              >
                {letter}
              </div>
              <button
                type="button"
                onClick={() => setInput(input + letter)}
                style={letter == "ْ" ? { whiteSpace: "pre-wrap" } : {}}
                className=" text-black  border-gray-400 border-2 w-full text-xl font-bold bg-gray-100 hover:bg-gray-300 rounded-lg px-5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {letter}
              </button>
            </div>
          </>
        ))}
        <div className="lg:hidden  flex grow flex-col justify-center col-span-4">
          <div
            className="w-full text-center text-gray-400 whitespace-pre"
            dir="ltr"
          >
            {" "}
          </div>
          <button
            type="button"
            onClick={() => {
              setInput(
                input.substring(0, cur) +
                  " " +
                  input.substring(cur, input.length)
              );
              setCur(cur + 1);
            }}
            className=" text-black  border-2 border-gray-400 text-center w-full font-bold bg-gray-100 hover:bg-gray-300 rounded-lg text-md px-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            مسافة
          </button>
        </div>
      </div>
    </div>
  );
}
