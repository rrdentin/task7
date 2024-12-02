import React, { useContext } from "react";
import { LanguageContext } from "../common/components/LanguageContext";

export default function Contact() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="py-10 px-8 md:px-16 rounded-lg my-10 mx-4 md:mx-8 lg:mx-16">
      <div className="py-10" />
      <h1 className="text-4xl font-bold mb-10 text-center">
        {language === "en" ? "CONTACT" : "KONTAK"}
      </h1>
      <form
        action="https://formspree.io/f/mwpkqzvk"
        method="POST"
        className="w-full max-w-lg mx-auto"
      >
        <p className="mb-8 text-xl">
          {language === "en"
            ? "Contact me via this form for job opportunities or other requests, and I'll get back to you as soon as I can!"
            : "Hubungi saya melalui formulir ini untuk peluang pekerjaan atau permintaan lainnya, dan saya akan segera menghubungi Anda!"}
        </p>
        <h2 className="text-xl font-bold mb-10 text-center">
        {language === "en" ? "- Send Me A Message -" : "- Kirimkan Saya Pesan -"}
      </h2>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              {language === "en" ? "Your email:" : "Email Anda:"}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 text-gray-900 leading-tight focus:outline-none focus:bg-white"
              type="email"
              name="email"
              id="grid-email"
              required
            />
          </div>
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-message"
            >
              {language === "en" ? "Your message:" : "Pesan Anda:"}
            </label>
            <textarea
              className="appearance-none block w-full h-32 bg-gray-200 border rounded py-3 px-4 mb-3 text-gray-900 leading-tight focus:outline-none focus:bg-white"
              name="message"
              id="grid-message"
              required
            />
          </div>
          <div className="w-full md:w-full flex items-center justify-center">
            <button
              type="submit"
              className="shadow bg-purple-400 hover:bg-purple-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              {language === "en" ? "Send" : "Kirim"}
            </button>
          </div>
        </div>
      </form>
      <div className="py-10" />
    </div>
  );
}
