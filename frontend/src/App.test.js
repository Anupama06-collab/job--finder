// src/App.test.js
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Job Finder app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
