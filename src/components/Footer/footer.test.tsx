import { render, screen } from "@testing-library/react";
import Footer from "./index";
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Footer component", () => {
  it("renders all sections of the Footer component", () => {
    render(<Footer />);

    const about = screen.getByTestId("about-section");
    expect(about).toBeInTheDocument();

    const getSupport = screen.getByTestId("get-support-section");
    expect(getSupport).toBeInTheDocument();

    const contactMe = screen.getByTestId("contact-me-section");
    expect(contactMe).toBeInTheDocument();
  });
});
