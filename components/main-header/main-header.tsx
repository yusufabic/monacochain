"use client";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ChevronDown } from "lucide-react";

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
      setShowLogo(scrollY <= 100);
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
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "ABOUT US",
      href: "/pages/about-us",
      subLinks: [
        { name: "Our Story", href: "/pages/about-us" },
        { name: "Our Team", href: "/pages/about-us/our-team" },
        { name: "Mission & Vision", href: "/pages/about-us/mission-vision" },
      ],
    },
    {
      name: "PRODUCTS",
      href: "/pages/products",
      subLinks: [
        { name: "Necklaces", href: "/pages/products" },
        { name: "Bracelets", href: "/pages/products/bracelets" },
        { name: "Earrings", href: "/pages/products/earrings" },
      ],
    },
    {
      name: "ORIGINALITY",
      href: "/pages/originality",
    },
    {
      name: "WHERE TO BUY",
      href: "/pages/where-to-buy",
    },
    {
      name: "OUR WORKS",
      href: "/pages/our-works",
    },
    {
      name: "CONTACT US",
      href: "/pages/contact-us",
    },
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
          <ul className="flex space-x-6">
            {navLinks.map((nav) => (
              <li key={nav.name} className="relative group">
                {/* Ana Link */}
                {nav.subLinks ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center hover:underline focus:outline-none">
                      {nav.name}
                      <ChevronDown className="ml-2 h-4 w-4" />
                      {/* Ok işareti */}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white shadow-md mt-2 p-2 rounded-md">
                      {nav.subLinks.map((subLink) => (
                        <DropdownMenuItem key={subLink.name}>
                          <Link
                            href={subLink.href}
                            className="text-gray-700 hover:text-black block px-4 py-2"
                          >
                            {subLink.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={nav.href}
                    className="hover:underline focus:outline-none"
                  >
                    {nav.name}
                  </Link>
                )}
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
