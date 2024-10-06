import Image from "next/image";

export default function Products() {
  return (
    <div>
      <div
        className="relative w-full h-[242px]"
        data-testid="all-products-banner"
      >
        <Image
          src="/assets/banners/allProducts.webp"
          alt="All Products Banner"
          className="object-cover rounded-lg"
          fill
        />
        <h1 className="absolute left-12 top-1/2 transform -translate-y-1/2 font-monserrat font-semibold text-6xl text-white">
          All Products
        </h1>
      </div>
    </div>
  );
}
