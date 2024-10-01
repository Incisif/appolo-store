"use client";

import { useEffect, useState, useCallback } from "react";
import Navbar from "../Navbar";
import ActionIcons from "../ActionIcons";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const controlHeader = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      // Cleanup
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [controlHeader, lastScrollY]);

  return (
    <header
      className={`flex justify-between items-center h-[70px] border-b border-zinc-200 bg-white sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl w-full mx-auto flex justify-between items-center py-5 px-10">
        <Link href="/" passHref className="flex">
          <button
            aria-label="Retour à l'accueil"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            <Image
              src="/assets/logo.svg"
              alt="Logo de l'entreprise"
              width={108}
              height={16}
              priority
            />
          </button>
        </Link>
        <Navbar />
        <ActionIcons />
      </div>
    </header>
  );
};

export default Header;
