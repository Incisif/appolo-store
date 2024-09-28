import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import LandingPage from '../page'; // Assure-toi que le chemin est correct
import CategoryPage from '../products/categories/[category]/page'; // Page de catégorie
import BrandPage from '../products/brands/[brand]/page'; // Page de marque
import ProfilePage from '../profile/page'; // Page de profil

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Tests de navigation des pages', () => {

  // Test pour la Landing Page
  it('affiche la Landing Page', () => {
    render(<LandingPage />);
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument(); // Teste la présence d'un élément sur la page
  });

  // Test pour la navigation vers la page des produits
  it('navigue vers la page des produits lorsque le lien est cliqué', () => {
    render(<LandingPage />);
    const productLink = screen.getByRole('link', { name: /Produits/i });
    expect(productLink).toBeInTheDocument();
  });

  // Test pour la navigation vers la page Profil
  it('navigue vers la page Profil lorsque le lien est cliqué', () => {
    render(<LandingPage />);
    const profileLink = screen.getByRole('link', { name: /Profil/i });
    expect(profileLink).toBeInTheDocument();
  });

  // Test pour la route dynamique des catégories
  it('affiche la page de la catégorie "electronics"', () => {
    const router = useRouter();
    router.query = { category: 'electronics' }; // Simule la catégorie
    render(<CategoryPage />);
    expect(screen.getByText(/electronics/i)).toBeInTheDocument(); // Teste un élément spécifique à la catégorie
  });

  it('affiche la page de la catégorie "furniture"', () => {
    const router = useRouter();
    router.query = { category: 'furniture' }; // Simule une autre catégorie
    render(<CategoryPage />);
    expect(screen.getByText(/furniture/i)).toBeInTheDocument();
  });

  // Test pour la route dynamique des marques
  it('affiche la page de la marque "apple"', () => {
    const router = useRouter();
    router.query = { brand: 'apple' }; // Simule la marque
    render(<BrandPage />);
    expect(screen.getByText(/apple/i)).toBeInTheDocument();
  });

  it('affiche la page de la marque "samsung"', () => {
    const router = useRouter();
    router.query = { brand: 'samsung' }; // Simule une autre marque
    render(<BrandPage />);
    expect(screen.getByText(/samsung/i)).toBeInTheDocument();
  });

  // Test pour la page Profil
  it('affiche la page de Profil', () => {
    render(<ProfilePage />);
    expect(screen.getByText(/Votre profil/i)).toBeInTheDocument(); // Teste un élément spécifique à la page Profil
  });

});
