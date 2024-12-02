import { render, screen, fireEvent } from "@testing-library/react";
import React, { useContext } from "react";
import { LanguageContext, LanguageContextProvider } from "../common/components/LanguageContext";

const LanguageConsumer = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <span>{language}</span>
      <button onClick={() => setLanguage(language === "en" ? "id" : "en")}>
        Toggle Language
      </button>
    </div>
  );
};

describe("LanguageContext", () => {
  test("should render default language 'en'", () => {
    render(
      <LanguageContextProvider>
        <LanguageConsumer />
      </LanguageContextProvider>
    );

    expect(screen.getByText("en")).toBeInTheDocument();
  });

  test("should change language when setLanguage is called", () => {
    render(
      <LanguageContextProvider>
        <LanguageConsumer />
      </LanguageContextProvider>
    );

    fireEvent.click(screen.getByText("Toggle Language"));

    expect(screen.getByText("id")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Toggle Language"));

    expect(screen.getByText("en")).toBeInTheDocument();
  });
});
