import React, { useContext } from "react";
import { LanguageContext } from "../common/components/LanguageContext";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Footer({ theme }: NavbarProps) {
  const { language } = useContext(LanguageContext);
  const bgClass =
    theme === "dark" ? "header-bg-color-dark" : "header-bg-color-light";
  const textClass = "text-white";
  return (
    <section className={`${bgClass} ${textClass} text-white py-4`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/rrdentin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
            aria-label="LinkedIn"

          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://www.github.com/rrdentin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300"
            aria-label="GitHub"

          >
            <i className="fa fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/rrdenti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400"
            aria-label="Instagram"

          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <div className="text-center text-sm space-y-2">
          <p>
            {language === "en"
              ? "Copyright ©2024 Rr. Denti Nurramadhona"
              : "Hak Cipta ©2024 Rr. Denti Nurramadhona"}
          </p>
        </div>
      </div>
    </section>
  );
}
