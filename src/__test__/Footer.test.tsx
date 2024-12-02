import { render, screen } from "@testing-library/react";
import Footer from "../layout/Footer";
import { LanguageContext } from "../common/components/LanguageContext";

describe("Footer Component", () => {
  test("renders footer with correct theme class", () => {
    const theme = "dark";
    const { container } = render(
      <LanguageContext.Provider value={{ language: "en", setLanguage: jest.fn() }}>
        <Footer theme={theme} toggleTheme={jest.fn()} />
      </LanguageContext.Provider>
    );
    const footerSection = container.querySelector("section");
    expect(footerSection).toHaveClass("header-bg-color-dark");
  });

  test("displays correct copyright text for English language", () => {
    render(
      <LanguageContext.Provider value={{ language: "en", setLanguage: jest.fn() }}>
        <Footer theme="dark" toggleTheme={jest.fn()} />
      </LanguageContext.Provider>
    );
    const copyrightText = screen.getByText(/Copyright ©2024 Rr. Denti Nurramadhona/i);
    expect(copyrightText).toBeInTheDocument();
  });

  test("displays correct copyright text for Indonesian language", () => {
    render(
      <LanguageContext.Provider value={{ language: "id", setLanguage: jest.fn() }}>
        <Footer theme="dark" toggleTheme={jest.fn()} />
      </LanguageContext.Provider>
    );
    const copyrightText = screen.getByText(/Hak Cipta ©2024 Rr. Denti Nurramadhona/i);
    expect(copyrightText).toBeInTheDocument();
  });

  test("renders social media links correctly", () => {
    render(
      <LanguageContext.Provider value={{ language: "en", setLanguage: jest.fn() }}>
        <Footer theme="light" toggleTheme={jest.fn()} />
      </LanguageContext.Provider>
    );

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    const githubLink = screen.getByRole("link", { name: /github/i });
    const instagramLink = screen.getByRole("link", { name: /instagram/i });

    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/rrdentin/");
    expect(githubLink).toHaveAttribute("href", "https://www.github.com/rrdentin");
    expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/rrdenti");
  });
});
