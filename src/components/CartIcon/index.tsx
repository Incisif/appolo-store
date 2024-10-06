import Link from "next/link";
import { ShoppingBagIcon as EmptyShoppingBag } from "@heroicons/react/24/outline";
//import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const CartIcon = () => {
  return (
    <Link href="/cart" className="p-1 rounded-sm hover:bg-gray-200 ml-4">
      <EmptyShoppingBag
        className="w-4 h-4 "
        data-testid="shoppingBagIcon"
      />
    </Link>
  );
};

export default CartIcon;
