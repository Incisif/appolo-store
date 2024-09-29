import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalButton from "./index";

describe("ModalButton", () => {
  // 1. Test de rendu initial
  it("n'affiche pas la modale par défaut", () => {
    render(<ModalButton title="test title">Contenu de la modale</ModalButton>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const modal = screen.queryByTestId("modal-content");
    expect(modal).not.toBeInTheDocument();
  });

  // 2. Test d'ouverture de la modale
  it("affiche la modale lorsque le bouton est cliqué", () => {
    render(<ModalButton title="Test Title">Contenu de la modale</ModalButton>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const modal = screen.queryByTestId("modal-content");
    expect(modal).toBeInTheDocument();
  });

  // 3. Test de fermeture de la modale au clic à l'extérieur
  it("ferme la modale lorsque l'on clique à l'extérieur", () => {
    render(<ModalButton title="Test Title">Contenu de la modale</ModalButton>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const modal = screen.queryByTestId("modal-content");
    expect(modal).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(modal).not.toBeInTheDocument();
  });

  // 4. Test du comportement du chevron
  it("le chevron pivote correctement lors de l'ouverture et de la fermeture de la modale", () => {
    render(<ModalButton title="Test Title">Contenu de la modale</ModalButton>);

    const button = screen.getByRole("button");
    const chevron = screen.getByTestId("chevron-icon");

    expect(chevron).toHaveClass("rotate-0");

    fireEvent.click(button);
    expect(chevron).toHaveClass("rotate-180");

    fireEvent.click(button);
    expect(chevron).toHaveClass("rotate-0");
  });

  // 5. Test d'accessibilité (focus sur le bouton)
  it("le bouton est focusable et cliquable via le clavier", async () => {
    render(<ModalButton title="Test Title">Contenu de la modale</ModalButton>);

    const button = screen.getByRole("button");

    await userEvent.tab();
    expect(button).toHaveFocus();

    await userEvent.keyboard("{enter}");
    const modal = screen.getByText("Contenu de la modale");
    expect(modal).toBeInTheDocument();
  });
});
