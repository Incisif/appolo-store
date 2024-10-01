// __mocks__/next/link.tsx
import React from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  passHref?: boolean; // Inclure passHref pour l'extraction
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MockedLink = ({ href, children, passHref: _passHref, ...props }: LinkProps) => {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default MockedLink;
