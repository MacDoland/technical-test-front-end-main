import React, { type ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-slate-200 to-slate-300 bg-left-25">
      <NavBar />
      <main className="flex-grow container mx-auto p-4 pt-4 pb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
