import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";



describe("Header", () => {
  it("affiche le lien home dans la navbar", () => {
    render(<Header />);
    const homeLink = screen.getByTestId("navbar-home-link");
    expect(homeLink).toBeInTheDocument(); 
  });
  it("affiche le bouton products dans la navbar", () => {
    render(<Header />);
    const productsLink = screen.getByTestId("navbar-products-link");
    expect(productsLink).toBeInTheDocument(); 
  });
  it("affiche le bouton brands dans la navbar", () => {
    render(<Header />);
    const brandsLink = screen.getByTestId("navbar-brands-link");
    expect(brandsLink).toBeInTheDocument(); 
  });
  it("affiche le lien deals dans la navbar", () => {
    render(<Header />);
    const dealsLink = screen.getByTestId("navbar-deals-link");
    expect(dealsLink).toBeInTheDocument(); 
  });
});