import Banner from "../components/LandingPageBanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="">
      <Banner />
      <h2 className="text-4xl font-bold  mt-8 text-zinc-600">Our gears</h2>
      <div className="flex justify-between mt-4">
        <h3 className="text-zinc-600">
          Find eveything you need for your next shoot.
        </h3>
        <Button className="rounded-full font-semibold bg-zinc-600">
          <Link href="/products"data-testid="shop-link">Shop now</Link>
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
