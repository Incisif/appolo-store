type Props = {
  params: {
    category: string;
  };
};

const CategoryPage = ({ params }: Props) => {
  return (
    <div>
      <h1>Category: {params.category}</h1>
    </div>
  );
};

export default CategoryPage;
