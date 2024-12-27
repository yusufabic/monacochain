"use client";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(true); // Logo görünürlüğünü kontrol etmek için state

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
      setShowLogo(scrollY <= 100); // Scroll 100px'den fazlaysa logo kaybolur
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-start transition-all duration-500 ${
          isScrolled ? "py-2" : "py-6"
        }`}
      >
        {/* Hamburger Menu */}
        <div className="md:hidden flex items-start justify-end mr-4 w-full">
          <button onClick={toggleMenu} className="text-black text-2xl">
            <Menu />
          </button>
        </div>
        {/* Logo */}
        {showLogo && (
          <div
            className={`text-center transition-opacity duration-500 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          >
            <h1 className="text-5xl font-bold font-serif tracking-widest">
              MONACO CHAIN™
            </h1>
            <p className="text-sm font-serif">by SOZER</p>
          </div>
        )}

        {/* Desktop Navbar */}
        <nav className="hidden md:block mt-4">
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
          <div className="flex justify-end items-center bg-white p-4 border-b">
            <button
              onClick={toggleMenu}
              className="text-2xl font-bold text-gray-800"
            >
              ×
            </button>
          </div>
          <ul className="flex flex-col items-start p-4 bg-white space-y-4">
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
