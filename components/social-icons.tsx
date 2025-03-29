"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Mail, X } from "lucide-react";

type SocialIconProps = {
  href: string;
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function SocialIcon({
  href,
  label,
  children,
  onClick,
}: SocialIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center w-8 h-8 text-white/70 hover:text-white transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={label}
      onClick={onClick}
    >
      {children}
      {isHovered && (
        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap">
          {label}
        </span>
      )}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function EmailModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]"
      onClick={onClose}
    >
      <div
        className="bg-black border border-white/20 p-8 min-w-[500px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-bold mb-6">Contact</h2>
        <p className="text-center text-lg font-mono py-6 whitespace-nowrap">
          andrew [at] grathwohl ((dot)) ME
        </p>
      </div>
    </div>
  );
}

export default function SocialIcons() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsEmailModalOpen(true);
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <SocialIcon href="https://github.com/agrathwohl" label="GitHub">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </SocialIcon>

        <SocialIcon
          href="https://www.linkedin.com/in/andrewgrathwohl/"
          label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </SocialIcon>

        <SocialIcon href="https://multipli.city" label="Multipli.city">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </SocialIcon>

        <SocialIcon href="#" label="Email" onClick={handleEmailClick}>
          <Mail width="20" height="20" strokeWidth="1.5" />
        </SocialIcon>
      </div>

      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </>
  );
}
