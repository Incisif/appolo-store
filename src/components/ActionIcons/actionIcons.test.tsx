import {render, screen} from "@testing-library/react";
import ActionIcons from "./index";

describe("ActionIcons", () => {
    it("affiche l'icône de loupe", () => {
        render(<ActionIcons />);
        const magnifyingGlassIcon = screen.queryByTestId("magnifyingGlassIcon");
        expect(magnifyingGlassIcon).toBeInTheDocument();
    });
    it("affiche l'icône de panier", () => {
        render(<ActionIcons />);
        const shoppingBagIcon = screen.queryByTestId("shoppingBagIcon");
        expect(shoppingBagIcon).toBeInTheDocument();
    });
    it("affiche l'icône de profil", () => {
        render(<ActionIcons />);
        const userCircleIcon = screen.queryByTestId("userCircleIcon");
        expect(userCircleIcon).toBeInTheDocument();
    });
    });