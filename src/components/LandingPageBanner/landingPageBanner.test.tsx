import { render, screen } from "@testing-library/react";
import LandingPageBanner from "./index";

describe("LandingPageBanner", () => {
  it("affiche le titre de la bannière", () => {
    render(<LandingPageBanner />);
    const bannerTitle = screen.queryByTestId("banner-text");
    expect(bannerTitle).toBeInTheDocument();
  });
  it("affiche l'image de la bannière", () => {
    render(<LandingPageBanner />);
    const bannerImage = screen.queryByTestId("banner-image");
    expect(bannerImage).toBeInTheDocument();
  });
});
