import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import LandingPage from "../page"; // Assure-toi que le chemin est correct
import Header from "@/components/Header";
import CategoryPage from "../categories/[category]/page"; // Page de catégorie
import BrandPage from "../brands/[brand]/page"; // Page de marque
import ProfilePage from "../profile/page"; // Page de profil

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Tests de navigation des pages", () => {
  // Test pour la Landing Page
  it("affiche la Landing Page", () => {
    render(<LandingPage />);
    expect(screen.getByText(/Our gears/i)).toBeInTheDocument();
  });

  // Test pour la navigation vers la page des produits
  it("navigue vers la page des produits lorsque le lien est cliqué", () => {
    render(<LandingPage />);
    const productLink = screen.queryByTestId("shop-link");
    expect(productLink).toBeInTheDocument();
  });

  // Test pour la navigation vers la page Profil
  it("navigue vers la page Profil lorsque le lien est cliqué", () => {
    render(<Header />);
    const profileLink = screen.getByTestId("userCircleIcon");
    expect(profileLink).toHaveAttribute("href", "/profile");
  });

  describe("Tests de la page de catégorie", () => {
    it('affiche la page de la catégorie "electronics"', () => {
      const mockRouter = {
        query: { category: "electronics" },
      };
      (useRouter as jest.Mock).mockReturnValue(mockRouter);

      render(<CategoryPage params={{ category: "electronics" }} />);

      expect(screen.getByText(/electronics/i)).toBeInTheDocument();
    });
  });

  it('affiche la page de la catégorie "furniture"', () => {
    const mockRouter = {
      query: { category: "furniture" },
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    render(<CategoryPage params={{ category: "furniture" }} />);
    expect(screen.getByText(/furniture/i)).toBeInTheDocument();
  });

  // Test pour la route dynamique des marques
  it('affiche la page de la marque "apple"', () => {
    const mockRouter = {
      query: { brand: "apple" },
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    render(<BrandPage params={{ brand: "apple" }} />);
    expect(screen.getByText(/apple/i)).toBeInTheDocument();
  });

  it('affiche la page de la marque "samsung"', () => {
    const mockRouter = {
      query: { brand: "samsung" },
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    render(<BrandPage params={{ brand: "samsung" }} />);
    expect(screen.getByText(/samsung/i)).toBeInTheDocument();
  });

  // Test pour la page Profil
  it("affiche la page de Profil", () => {
    render(<ProfilePage />);
    expect(screen.getByText(/Votre profil/i)).toBeInTheDocument();
  });
});
