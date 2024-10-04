// ActionIcons.tsx
import Link from "next/link";
import { ShoppingBagIcon, UserCircleIcon as UserCircleOutlineIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon as UserCircleSolidIcon } from "@heroicons/react/24/solid";

import { useAuth } from "@/contexts/AuthContext"; // Importer le hook d'authentification

const ActionIcons = () => {
  const authContext = useAuth(); // Accéder à l'état d'authentification
  const isLoggedIn = authContext ? authContext.isLoggedIn : false;

  return (
    <div className="flex">
      <MagnifyingGlassIcon className="w-4 h-4" data-testid="magnifyingGlassIcon" />
      <Link href="/cart">
        <ShoppingBagIcon className="w-4 h-4 ml-4" data-testid="shoppingBagIcon" />
      </Link>

      <Link href={isLoggedIn ? "/profile" : "/signin"} aria-label="Profile Link" passHref>
        {isLoggedIn ? <UserCircleSolidIcon className="w-4 h-4 ml-4" /> : <UserCircleOutlineIcon className="w-4 h-4 ml-4" />}
      </Link>
    </div>
  );
};

export default ActionIcons;
