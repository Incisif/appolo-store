import { render, screen } from "@testing-library/react";
import LandingPage from "./page";

describe("Landing page", () => {
  // Teste si le titre principal est rendu
  it("renders the heading", () => {
    render(<LandingPage />);
    const heading = screen.getByText("Welcome to Appolo!");
    expect(heading).toBeInTheDocument();
  });

  // Teste si le titre de la section des cartes est rendu
  it("renders the card section title", () => {
    render(<LandingPage />);
    const sectionTitle = screen.getByTestId("card-section-title");
    expect(sectionTitle).toBeInTheDocument();
  });

  // Teste si le sous-titre de la section des cartes est rendu
  it("renders the card section subtitle", () => {
    render(<LandingPage />);
    const sectionSubtitle = screen.getByTestId("card-section-subtitle");
    expect(sectionSubtitle).toBeInTheDocument();
  });

  // Teste si les cartes sont bien rendues (en vérifiant qu'il y en a au moins une)
  it("renders the category cards", () => {
    render(<LandingPage />);
    const categoryCards = screen.getAllByTestId("category-card");
    expect(categoryCards.length).toBeGreaterThan(0);
  });
  it("renders the shop link", () => {
    render(<LandingPage />);
    const shopLink = screen.getByTestId("shop-link");
    expect(shopLink).toBeInTheDocument();
  });
});
