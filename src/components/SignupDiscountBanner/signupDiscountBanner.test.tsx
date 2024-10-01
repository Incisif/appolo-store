import { render, screen } from "@testing-library/react";
import SignupDiscountBanner from "../SignupDiscountBanner";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";



describe("SignupDiscountBanner Component", () => {
  const mockPush = jest.fn(); // Crée une fonction mock pour `router.push`

  beforeEach(() => {
    // Assurez-vous que `useRouter` renvoie la fonction `push` mockée
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    // Rendre le composant pour chaque test
    render(<SignupDiscountBanner />);
  });

  afterEach(() => {
    jest.clearAllMocks(); // Nettoyer les mocks après chaque test
    localStorage.clear(); // Nettoyer le `localStorage` pour éviter les interférences
  });

  it("renders the signup discount banner", () => {
    const signupDiscountBanner = screen.getByTestId("signup-discount-banner");
    expect(signupDiscountBanner).toBeInTheDocument();
  });

  it("renders the signup discount banner text", () => {
    const signupDiscountBannerText = screen.getByTestId("signup-discount-banner-text");
    expect(signupDiscountBannerText).toBeInTheDocument();
  });

  it("renders the email input with correct attributes", () => {
    const emailInput = screen.getByTestId("email-input");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("placeholder", "Email");
  });

  it("renders the signup button and it's always enabled", () => {
    const signupButton = screen.getByTestId("signup-discount-banner-button");
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toBeEnabled();
  });

  it("displays an error toast for invalid email and does not redirect", async () => {
    const user = userEvent.setup();
    const emailInput = screen.getByTestId("email-input");
    const signupButton = screen.getByTestId("signup-discount-banner-button");

    // Saisir un email invalide
    await user.type(emailInput, "invalid-email");

    // Cliquer sur le bouton
    await user.click(signupButton);

    // Vérifier que la popup d'erreur est affichée
    const errorToast = await screen.findByText("Veuillez entrer une adresse email valide.");
    expect(errorToast).toBeInTheDocument();

    // Vérifier que la redirection n'a pas eu lieu
    expect(mockPush).not.toHaveBeenCalled();
  });

  it("redirects to the signup page upon clicking the button with a valid email and saves email to localStorage", async () => {
    const user = userEvent.setup();
    const emailInput = screen.getByTestId("email-input");
    const signupButton = screen.getByTestId("signup-discount-banner-button");

    // Saisir un email valide
    await user.type(emailInput, "test@example.com");

    // Cliquer sur le bouton
    await user.click(signupButton);

    // Vérifier que le routeur a bien changé d'URL
    expect(mockPush).toHaveBeenCalledWith("/signup");

    // Vérifier que l'email est bien sauvegardé dans le localStorage
    expect(localStorage.getItem("signupEmail")).toBe("test@example.com");
  });
});
