"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form({
  email,
  subject,
  message,
  messageSent,
  messageSend,
}) {
  const [sent, setSent] = useState(false);
  const [controlled, setControlled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_edtivwo",
      "template_s2ojja3",
      e.target,
      "N-kbUR1QBSkuS8VIq"
    );
    setSent(true);
  };
  return (
    <form action="#" className="space-y-8" onSubmit={sendEmail}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-black dark:text-white"
        >
          {email}
        </label>
        <input
          type="email"
          disabled={sent}
          id="email"
          name="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name@example.com"
          required=""
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-black dark:text-white"
        >
          {subject}
        </label>
        <input
          type="text"
          disabled={sent}
          name="subject"
          id="subject"
          className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          required=""
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-black dark:text-white"
        >
          {message}
        </label>
        <textarea
          id="message"
          name="message"
          disabled={sent}
          rows={6}
          className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          defaultValue={""}
        />
      </div>
      <button
        type="submit"
        disabled={sent || controlled}
        className="py-3 px-5 w-full text-sm font-bold text-center text-white rounded-lg bg-back hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {sent ? messageSent : messageSend}
      </button>
    </form>
  );
}
