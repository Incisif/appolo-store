"use client";

import { useAuth } from "@/contexts/AuthContext";
import { UserCircleIcon as UserCircleSolidIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon as UserCircleOutlineIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProfileIcon = () => {
  const authContext = useAuth();
  const isLoggedIn = authContext ? authContext.isLoggedIn : false;

  return (
    <Link
        href={isLoggedIn ? "/profile" : "/signin"}
        aria-label="Profile Link"
        className="p-1 rounded-sm hover:bg-gray-200 ml-4"
        passHref
      >
      {isLoggedIn ? (
        <UserCircleSolidIcon
          className="w-4 h-4 "
          data-testid="connected-user-icon"
        />
      ) : (
        <UserCircleOutlineIcon
          className="w-4 h-4 ml-4"
          data-testid="unconnected-user-icon"
        />
      )}
    </Link>
  );
};

export default ProfileIcon;
