"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = pathname === "/";
  const isProjectPage = pathname.startsWith("/projects");
  const isAboutPage = pathname === "/about";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      id="header-area"
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
    >
      <div className="container mx-auto px-6 md:px-20 py-4 md:py-8">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-gray-900 hover:text-orange-500 transition"
          >
            Mukti<span className="text-orange-500"> Abdi </span>Syukur
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {/* Home */}
            <Link
              href="/"
              className={`text-lg font-medium transition ${
                isHomePage
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Home
            </Link>

            {/* Project */}
            <Link
              href="/projects"
              className={`text-lg font-medium transition ${
                isProjectPage
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Project
            </Link>

            {/* Resume */}
            <Link
              href="https://drive.google.com/file/d/1re-Nap5dYh-XlGvvohu2q3iM6YmCzKl4/view?usp=drive_link"
              target="_blank"
              className="text-lg font-medium text-gray-700 hover:text-orange-500 transition"
            >
              Resume
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`text-lg font-medium transition ${
                isAboutPage
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              {/* Home */}
              <Link
                href="/"
                className={`text-lg font-medium transition ${
                  isHomePage
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Project */}
              <Link
                href="/projects"
                className={`text-lg font-medium transition ${
                  isProjectPage
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </Link>

              {/* Resume */}
              <Link
                href="https://drive.google.com/file/d/1re-Nap5dYh-XlGvvohu2q3iM6YmCzKl4/view?usp=drive_link"
                target="_blank"
                className="text-lg font-medium text-gray-700 hover:text-orange-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`text-lg font-medium transition ${
                  isAboutPage
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
