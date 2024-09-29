import Link from "next/link";
import ModalButton from "../ModalButton";
const Navbar = () => {
  return (
    <div className="text-xs">
      <Link
        href="/"
        data-testid="navbar-home-link"
        className=" items-center py-1 px-2 hover:bg-slate-200 text-zinc-900 rounded-full transition-colors duration-300 ease-in-out"
      >
        Home
      </Link>
      <ModalButton title="All products" data-testid="navbar-products-link">
        Products
      </ModalButton>
      <ModalButton title="All brands" data-testid="navbar-brands-link">
        Brands
      </ModalButton>
      <Link
        href="/deals"
        data-testid="navbar-deals-link"
        className="items-center py-1 px-2 hover:bg-slate-200 text-zinc-900 rounded-full transition-colors duration-300 ease-in-out ml-2"
      >
        Deals
      </Link>
    </div>
  );
};

export default Navbar;
