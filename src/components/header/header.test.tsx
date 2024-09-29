import { render, screen } from "@testing-library/react";
import Header from "@/components/header";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Header", () => {
  it("affiche le logo APPOLO dans le header", () => {
    render(<Header />);

    // Vérifier la présence du logo via l'attribut alt
    const logo = screen.getByAltText("Logo de l'entreprise");
    expect(logo).toBeInTheDocument(); // Vérifie que le logo est bien dans le DOM
  });
});
