import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const VisionSection = () => {
  return (
    <section
      data-testid="vision-section"
      className="grid grid-cols-1 sm:grid-cols-2 w-full mt-12 mb-12 gap-8  text-zinc-600"
    >
      {/* Left Column: Text Content */}
      <div className="flex flex-col justify-between">
        <h2 className="text-4xl font-bold" data-testid="vision-section-title">
          Our Vision
        </h2>
        <h3
          className="text-zinc-600 mb-6 mt-3"
          data-testid="vision-section-subtitle"
        >
          Find everything you need for your next shoot.
        </h3>
        <p className="pr-8">
          At Apollo, we believe that photography is more than just an art —
          it&apos;s a passion that fuels the soul and a way to capture the
          essence of life. Every shot is an opportunity to feel the freedom and
          joy of creative expression. Our mission is to provide photography
          enthusiasts with the most reliable and high-quality tools, so that
          every moment can be immortalized with passion, serenity, and
          precision. With Apollo, every photo becomes a masterpiece, every
          moment, a story. Explore our carefully curated selection and let your
          passion inspire every capture.
        </p>
        <Button className="rounded-sm w-1/3 text-2xl font-semibold font-montserrat text-zinc-100 bg-yellow-600 hover:bg-yellow-700 mt-6">
          <Link href="/products" data-testid="products-link">
            Explore
          </Link>
        </Button>
      </div>

      {/* Right Column: Image */}
      <div className="relative aspect-501/338  overflow-hidden flex ">
        <Image
          src="/assets/paysage.webp"
          alt="photo de paysage"
          fill
          className="rounded-lg object-cover self-end "
        />
      </div>
    </section>
  );
};

export default VisionSection;
