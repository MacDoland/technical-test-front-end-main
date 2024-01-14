import React, { type ReactNode } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-slate-100 to-slate-200 bg-left-25">
      <NavBar />
      <main className="flex-grow container mx-auto p-4 pt-4 pb-12">
        {children}
      </main>
      <Footer>
        <p className="text-white">Created by Joe McDowall for Cyberhawk 2024</p>
      </Footer>
    </div>
  );
};

export default Layout;
