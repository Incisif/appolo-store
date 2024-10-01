// __tests__/CategoryCard.test.tsx
import { render, screen } from "@testing-library/react";
import CategoryCard from "./index";

describe("CategoryCard component", () => {
  const categories = [
    {
      title: "Cameras",
      image: "/images/cameras.jpg",
      link: "/categories/cameras",
    },
    {
      title: "Lenses",
      image: "/images/lenses.jpg",
      link: "/categories/lenses",
    },
    {
      title: "Filters",
      image: "/images/filters.jpg",
      link: "/categories/filters",
    },
    {
      title: "Tripods",
      image: "/images/tripods.jpg",
      link: "/categories/tripods",
    },
    {
      title: "Bags",
      image: "/images/bags.jpg",
      link: "/categories/bags",
    },
  ];

  test.each(categories)(
    "renders the category card for %s with correct link",
    ({ title, image, link }) => {
      render(<CategoryCard title={title} image={image} link={link} />);

      // Vérifier que la CategoryCard est présente
      const categoryCard = screen.getByTestId("category-card");
      expect(categoryCard).toBeInTheDocument();

      // Vérifier que l'image est correcte
      const img = screen.getByAltText(title);
      expect(img).toBeInTheDocument();
      expect((img as HTMLImageElement).src).toContain(image);

      // Vérifier que le lien est correct via aria-label
      const linkElement = screen.getByRole("link", { name: title });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", link);
    }
  );
});
