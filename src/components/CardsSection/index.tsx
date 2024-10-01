import CategoryCard from "../CategoryCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const CardsSection = () => {
    return (
        <section>
        <h2
          className="text-4xl font-bold  mt-8 text-zinc-600"
          data-testid="card-section-title"
        >
          Our gears
        </h2>
        <div className="flex justify-between mt-3">
          <h3 className="text-zinc-600" data-testid="card-section-subtitle">
            Find eveything you need for your next shoot.
          </h3>
          <Button className="rounded-full font-semibold bg-zinc-600">
            <Link href="/products" data-testid="shop-link">
              Shop now
            </Link>
          </Button>
        </div>
        <div className="flex flex-wrap">
          <CategoryCard title={""} image={""} link={""} ></CategoryCard>
          <CategoryCard title={""} image={""} link={""} ></CategoryCard>
          <CategoryCard title={""} image={""} link={""} ></CategoryCard>
          <CategoryCard title={""} image={""} link={""} ></CategoryCard>
          <CategoryCard title={""} image={""} link={""} ></CategoryCard>
          <CategoryCard title={""} image={""} link={""} ></CategoryCard>
        </div>
      </section>
       
    );
}

export default CardsSection;