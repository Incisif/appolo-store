import { render, screen } from "@testing-library/react";
import VisionSection from "./index";

it("renders the vision section", () => {
  render(<VisionSection />);
  const visionSection = screen.getByTestId("vision-section");
  expect(visionSection).toBeInTheDocument();
});
