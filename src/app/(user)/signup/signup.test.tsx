import { render, screen } from "@testing-library/react";

import Signup from "./page";

describe("Signup Page", () => {
  it("renders the signup page", () => {
    render(<Signup />);
    const signupPage = screen.getByTestId("signup-page");
    expect(signupPage).toBeInTheDocument();
  });

  it("renders the background image", () => {
    render(<Signup />);
    const backgroundImage = screen.getByTestId("background-image");
    expect(backgroundImage).toBeInTheDocument();
  });
  it("renders the background text", () => {
    render(<Signup />);
    const backgroundText = screen.getByTestId("background-text");
    expect(backgroundText).toBeInTheDocument();
  });

  it("renders the signup form", () => {
    render(<Signup />);
    const signupForm = screen.getByTestId("signup-form");
    expect(signupForm).toBeInTheDocument();
  });
});
