type Props = {
  params: {
    brand: string;
  };
};

export default function BrandPage({ params }: Readonly<Props>) {
  return <div>Brands :{params.brand}</div>;
}
