type Props = {
  params: {
    brand: string;
  };
};

export default function BrandPage({ params }: Readonly<Props>) {
  return <div className="font-manrope">Brands :{params.brand}</div>;
}
