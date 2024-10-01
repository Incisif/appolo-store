import '@testing-library/jest-dom';
import { useRouter } from 'next/navigation';

// Moquer `useRouter` de `next/navigation`
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Avant chaque test, définir un comportement par défaut pour `useRouter`
beforeEach(() => {
  (useRouter as jest.Mock).mockReturnValue({
    push: jest.fn(), // Mock de la fonction `push` si nécessaire
    replace: jest.fn(), // Mock de la fonction `replace` si nécessaire
    prefetch: jest.fn().mockResolvedValue(undefined), // Mock de `prefetch` si utilisé
    // Ajoute d'autres méthodes du router selon tes besoins
  });
});
