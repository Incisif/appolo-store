import Link from 'next/link';

const LandingPage = ({ params }: { params: { locale: string } }) => {
  const { locale } = params; // Récupère la locale depuis les paramètres de la route.

  return (
    <div>
      <h1>Welcome to the Store</h1>
      
      <Link href={`/${locale}/products`}>
        <button className='bg-green-500'>Produits</button>
      </Link>
      
      <Link href={`/${locale}/deals`}>
        <button className='bg-red-500'>Deals</button>
      </Link>
      
      <Link href={`/${locale}/profile`}>
        <button className='bg-blue-500'>Profile</button>
      </Link>
      
      <Link href={`/${locale}/signup`}>
        <button className='bg-pink-500'>Signup</button>
      </Link>
      
    </div>
  );
};

export default LandingPage;
