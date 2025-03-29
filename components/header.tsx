"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full py-4 px-6 border-b border-white/10 relative z-50 bg-black">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter hover:text-red-500 transition-colors"
        >
          G.
        </Link>

        {/* Desktop Navigation and Social Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex flex-row">
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/work">Work</NavLink>
            <NavLink href="/music">Music</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>
        </div>

        {/* Mobile Menu Button - Absolutely positioned to the right */}
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Overlay for closing menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation */}
      <div ref={menuRef}>
        <nav
          className={`
          ${isMenuOpen ? "flex" : "hidden"} 
          md:hidden
          flex-row justify-center
          fixed
          top-0 left-0 right-0 
          bg-black/95
          border-b border-white/10
          p-4
          z-50
          h-12 items-center
        `}
        >
          <NavLink href="/blog" onClick={closeMenu}>
            Blog
          </NavLink>
          <NavLink href="/work" onClick={closeMenu}>
            Work
          </NavLink>
          <NavLink href="/music" onClick={closeMenu}>
            Music
          </NavLink>
          <NavLink href="/about" onClick={closeMenu}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className="group relative px-4 py-2 text-white/70 hover:text-white transition-colors mx-1"
      onClick={onClick}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
