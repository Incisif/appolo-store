import Link from "next/link";

import {
  ShoppingBagIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const ActionIcons = () => {
  return (
    <div className="flex">
      <MagnifyingGlassIcon
        className="w-4 h-4"
        data-testid="magnifyingGlassIcon"
      />
      <Link href="/cart">
        <ShoppingBagIcon
          className="w-4 h-4 ml-4"
          data-testid="shoppingBagIcon"
        />
      </Link>

      <Link
        href="/profile"
        aria-label="Profile Link"
        data-testid="userCircleIcon"
        passHref
      >
        <UserCircleIcon className="w-4 h-4 ml-4" />
      </Link>
    </div>
  );
};

export default ActionIcons;
