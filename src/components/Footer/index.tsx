import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex items-center h-[217px] bg-zinc-900 font-manrope  text-zinc-50 ">
      <div className="max-w-screen-xl w-full mx-auto flex items-center py-5 px-10 justify-between">
        <div className="flex flex-col justify-center ">
          <Image
            src="/assets/logo-white.svg"
            alt="Logo de l'entreprise"
            width={216}
            height={59}
            priority
          />
          <div className="bg-yellow-600 w-full h-1 mt-3 "></div>
          <p className="text-2xl mt-2 tracking-wide">Focused on quality</p>
        </div>
        <div className="flex gap-10">
          <div data-testid="about-section">
            <h2 className="text-2xl font-semibold font-montserrat">
              About Appolo
            </h2>
            <ul className="space-y-1 mt-1">
              <li>
                <Link href="/mission">Mission</Link>
              </li>
              <li>
                <Link href="/vision">Vision</Link>
              </li>
              <li>
                <Link href="/our-story">Our story</Link>
              </li>
            </ul>
          </div>
          <div data-testid="get-support-section">
            <h2 className="text-2xl font-semibold font-montserrat">
              Get support
            </h2>
            <ul className="space-y-1 mt-1">
              <li>
                <Link href="/guides">User Guides</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping & Returns</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
            </ul>
          </div>
          <div data-testid="contact-me-section">
            <h2 className="text-2xl font-semibold font-montserrat">
              Contact me
            </h2>
            <ul className="space-y-1 mt-1">
              <li>
                <Link href="/email">Email</Link>
              </li>
              <li>
                <Link href="https://portfolio.desem.dev/">Portfolio</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-6 h-full self-end ">
          <Link
            href="https://www.instagram.com/loeildejack/"
            aria-label="Visit my Instagram profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6" />
          </Link>
          <Link
            href="https://x.com/_Emdodj"
            aria-label="Visit my Twitter profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/emmanuel-desmortreux-1223a5257/"
            aria-label="Visit my LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
