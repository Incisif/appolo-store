import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";
import ActionIcons from "../ActionIcons";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-[70px] border-b border-zinc-200">
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
