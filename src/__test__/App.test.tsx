import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
jest.mock("../layout/Navbar", () => () => <div>Navbar</div>);
jest.mock("../layout/Footer", () => () => <div>Footer</div>);
jest.mock("../pages/Home", () => () => <div>Home Page</div>);
jest.mock("../pages/Projects", () => () => <div>Projects Page</div>);
jest.mock("../pages/Contact", () => () => <div>Contact Page</div>);

describe("App", () => {
  test("renders Navbar, Home page, and Footer correctly", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Navbar/i)).toBeInTheDocument();
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  });
});
