import { screen } from "@testing-library/react";
import ProfileIcon from "@/components/ProfileIcon";
import { mockUseAuthProvider } from "../../../__mocks__/next/authContext"; 
import '@testing-library/jest-dom';

describe('ProfileIcon component', () => {
  test('renders unconnected icon when user is not logged in', async () => {
    const { renderWithAuthContext } = mockUseAuthProvider({
      isLoggedIn: false,
      user: null,
    });

    renderWithAuthContext(<ProfileIcon />);

    // Vérifie que l'icône non connectée est affichée
    const unconnectedIcon = await screen.findByTestId('unconnected-user-icon');
    expect(unconnectedIcon).toBeInTheDocument();

    // Vérifie que le lien redirige vers la page de connexion
    const link = screen.getByRole('link', { name: 'Profile Link' });
    expect(link).toHaveAttribute('href', '/signin');
  });

  test('renders connected icon when user is logged in', async () => {
    // Utiliser le helper pour définir l'état connecté
    const { renderWithAuthContext } = mockUseAuthProvider({
      isLoggedIn: true,
      user: { id: '1', email: 'test@example.com' },
    });

    renderWithAuthContext(<ProfileIcon />);

    // Vérifie que l'icône connectée est affichée
    const connectedIcon = await screen.findByTestId('connected-user-icon');
    expect(connectedIcon).toBeInTheDocument();

    // Vérifie que le lien redirige vers la page de profil
    const link = screen.getByRole('link', { name: 'Profile Link' });
    expect(link).toHaveAttribute('href', '/profile');
  });
});
