import { render, screen } from "@testing-library/react";

import Footer from "./index";

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
  }));
  

describe("Footer component", () => {
  it("renders the Footer component", () => {
    render(<Footer />);

    const about = screen.getByTestId("about-section");
    expect(about).toBeInTheDocument();
  });

  it("renders the Footer component", () => {
    render(<Footer />);
    const getSupport = screen.getByTestId("get-support-section");
    expect(getSupport).toBeInTheDocument();
  });

  it("renders the Footer component", () => {
    render(<Footer />);
    const contactMe = screen.getByTestId("contact-me-section");
    expect(contactMe).toBeInTheDocument();
  });
});
