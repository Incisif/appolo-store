"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface ModalButtonProps {
  children: ReactNode;
  title: string;
  "data-testid"?: string;
}

const ModalButton = ({
  children,
  title,
  "data-testid": testId,
}: ModalButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const href =
    typeof children === "string"
      ? `/${children.toLowerCase().replace(/\s+/g, "-")}`
      : "/";

  // Ferme la modale si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block ml-2">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center py-1 px-2 hover:bg-slate-200 text-zinc-900 rounded-full transition-colors duration-300 ease-in-out"
        data-testid={testId}
      >
        {children}
        <ChevronDownIcon
          data-testid="chevron-icon"
          className={`w-3 h-3 ml-1 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div
          ref={modalRef}
          className="absolute mt-4 w-64 bg-white p-4 rounded-lg shadow-lg z-10"
          style={{ top: "100%" }}
          data-testid="modal-content"
        >
          <Link href={href}>
            <h2 className="hover:underline">{title}</h2>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ModalButton;
