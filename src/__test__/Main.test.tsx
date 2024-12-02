import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

jest.mock("react-dom/client", () => ({
  createRoot: jest.fn((container) => ({
    render: jest.fn(),
  })),
}));

describe("Index file", () => {
  test("renders the App component inside BrowserRouter", () => {
    const rootElement = document.createElement("div");
    rootElement.id = "root";
    document.body.appendChild(rootElement);

    require("../main"); 
    expect(createRoot).toHaveBeenCalledWith(rootElement);

    const mockRender = (createRoot as jest.Mock).mock.results[0].value.render;
        expect(mockRender).toHaveBeenCalledWith(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});