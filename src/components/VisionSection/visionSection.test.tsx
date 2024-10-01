import { render, screen } from "@testing-library/react";
import VisionSection from "./index";

it("renders the vision section", () => {
  render(<VisionSection />);
  const visionSection = screen.getByTestId("vision-section");
  expect(visionSection).toBeInTheDocument();
});

it("renders the vision section title", () => {
  render(<VisionSection />);
  const visionSectionTitle = screen.getByTestId("vision-section-title");
  expect(visionSectionTitle).toBeInTheDocument();
});
it("renders the vision section subtitle", () => {
  render(<VisionSection />);
  const visionSectionSubtitle = screen.getByTestId("vision-section-subtitle");
  expect(visionSectionSubtitle).toBeInTheDocument();
});
it("renders the vision section button", () => {
  render(<VisionSection />);
  const visionSectionButton = screen.getByTestId("products-link");
  expect(visionSectionButton).toBeInTheDocument();
});
it("renders the vision section image", () => {
  render(<VisionSection />);
  const visionSectionImage = screen.getByRole("img");
  expect(visionSectionImage).toBeInTheDocument();
});
it("renders the vision section image with the correct alt text", () => {
  render(<VisionSection />);
  const visionSectionImage = screen.getByRole("img");
  expect(visionSectionImage).toHaveAttribute("alt", "photo de paysage");
});
it("renders the vision section image with the correct source", () => {
  render(<VisionSection />);
  const visionSectionImage = screen.getByRole("img");
  expect(visionSectionImage).toHaveAttribute("src", "/assets/paysage.webp");
});
it("redirects to the products page when the button is clicked", () => {
  render(<VisionSection />);
  const visionSectionButton = screen.getByTestId("products-link");
  expect(visionSectionButton).toHaveAttribute("href", "/products");
});
