// components/CategoryCard.jsx
import Link from "next/link";
import Image from "next/image";

type CategoryCardProps = {
  title: string;
  image: string;
  link: string;
};

const CategoryCard = ({ title, image, link }: CategoryCardProps) => {
  return (
    <Link data-testid="category-card" href={link} className="block" aria-label={title}>
      <div className="relative rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 aspect-[130/99]">
        <Image
          src={image}
          alt={title}
          priority
          className="object-cover hover:scale-105 transform transition-transform duration-300"
          fill
        />
        <div className="absolute bottom-4 left-4 bg-slate-300 bg-opacity-50 backdrop-blur-md px-4 py-2 rounded-lg">
          <p className="text-zinc-50 font-montserrat font-semibold text-2xl">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
