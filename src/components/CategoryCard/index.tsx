import Link from "next/link";
import Image from "next/image";

type CategoryCardProps = {
  title: string;
  image: string;
  link: string;
};

const CategoryCard = ({ title, image, link }: CategoryCardProps) => {
  return (
    <Link data-testid="category-card" href={link}>
        <div className="rounded-lg object-cover"></div>
      <Image src={image} alt={title} width={300} height={300} priority  />
    </Link>
  );
};

export default CategoryCard;
