import type { ReactNode } from "react";

interface FooterProps {
  children: ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }: FooterProps) => {
  return (
    <footer className="flex justify-center bg-slate-900 p-8">{children}</footer>
  );
};

export default Footer;
