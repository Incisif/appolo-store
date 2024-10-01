import {render, screen} from "@testing-library/react";

import CategoryCard from "./index";

describe("CategoryCard component", () => {
  it("renders the category card", () => {
    render(<CategoryCard title={"test title"} image={""} link={""} />);
    const categoryCard = screen.getByTestId("category-card");
    expect(categoryCard).toBeInTheDocument();
  });
});