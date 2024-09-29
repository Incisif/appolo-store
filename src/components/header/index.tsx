import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/" passHref>
        <button
          aria-label="Retour à l'accueil"
          style={{ background: "none", border: "none", padding: 0 }}
        >
          <Image
            src="/assets/logo.svg"
            alt="Logo de l'entreprise"
            width={150}
            height={50}
            priority
          />
        </button>
      </Link>
    </header>
  );
};

export default Header;
