"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/pages/about-us" },
    { name: "PRODUCTS", href: "/pages/products" },
    { name: "ORIGINALITY", href: "/pages/originality" },
    { name: "WHERE TO BUY", href: "/pages/where-to-buy" },
    { name: "OUR WORKS", href: "/pages/our-works" },
    { name: "CONTACT US", href: "/pages/contact-us" },
  ];

  return (
    <header className="relative w-full h-[800px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/navigation.png)",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Logo ve Navbar */}
      <div className="relative z-10 flex flex-col items-center justify-start text-white bg-slate-950 opacity-60 shadow-xl">
        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center justify-end mt-4 mr-4 w-full">
          <button onClick={toggleMenu} className="text-white text-2xl">
            <Menu />
          </button>
        </div>
        {/* Logo */}
        <h1 className="text-5xl font-bold font-serif tracking-widest mt-20">
          MONACO CHAIN™
        </h1>
        <p className="text-sm mt-1 font-serif">by SOZER</p>

        {/* Desktop Navbar */}
        <nav className="hidden md:block mt-6">
          <ul className="flex space-x-8 text-lg font-serif tracking-widest">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="cursor-pointer">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Hamburger Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white text-black z-20">
          <div className="flex justify-end items-center p-4 border-b">
            {/* Menü Kapatma Butonu */}
            <button
              onClick={toggleMenu}
              className="text-2xl font-bold text-gray-800"
            >
              ×
            </button>
          </div>
          <ul className="flex flex-col items-start p-4 space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:underline"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
