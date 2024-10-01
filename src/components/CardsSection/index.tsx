import CategoryCard from "../CategoryCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CardsSection = () => {
  return (
    <section >
      <h2
        className="text-4xl font-bold mt-8 text-zinc-600"
        data-testid="card-section-title"
      >
        Our Gears
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between mt-3">
        <h3 className="text-zinc-600 mb-4 md:mb-0" data-testid="card-section-subtitle">
          Find everything you need for your next shoot.
        </h3>
        <Button className="rounded-full font-semibold bg-zinc-600 h-6">
          <Link href="/products" data-testid="shop-link">
            Shop All
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <CategoryCard
          title="Cameras"
          image="/assets/categoryCards/cameras.webp"
          link="/category/cameras"
        />
        <CategoryCard
          title="Lenses"
          image="/assets/categoryCards/lenses.webp"
          link="/category/lenses"
        />
        <CategoryCard
          title="Bags"
          image="/assets/categoryCards/bags.webp"
          link="/category/bags"
        />
        <CategoryCard
          title="Filters"
          image="/assets/categoryCards/filters.webp"
          link="/category/filters"
        />
        <CategoryCard
          title="Tripods"
          image="/assets/categoryCards/tripods.webp"
          link="/category/tripods"
        />
        <CategoryCard
          title="Drops"
          image="/assets/categoryCards/drops.webp"
          link="/category/drops"
        />
      </div>
    </section>
  );
};

export default CardsSection;
