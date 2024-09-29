import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="flex ">
      <Link href="/" passHref>
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
    </header>
  );
};

export default Header;
