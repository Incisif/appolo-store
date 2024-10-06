import { render, screen } from "@testing-library/react";

import Products from "./page";

describe("Products", () => {
  it("should render the heading", () => {
    render(<Products />);
    const heading = screen.getByText("All Products");
    expect(heading).toBeInTheDocument();
  });
  it("should render the image", () => {
    render(<Products />);
    const image = screen.getByTestId("all-products-banner");
    expect(image).toBeInTheDocument();
  });
});
