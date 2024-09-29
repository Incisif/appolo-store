import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Store</h1>

      <Link href={`/products`}>
        <button className="bg-green-500">Produits</button>
      </Link>

      <Link href={`/deals`}>
        <button className="bg-red-500">Deals</button>
      </Link>

      <Link href={`/profile`}>
        <button className="bg-blue-500">Profile</button>
      </Link>

      <Link href={`/signup`}>
        <button className="bg-pink-500">Signup</button>
      </Link>
    </div>
  );
};

export default LandingPage;
