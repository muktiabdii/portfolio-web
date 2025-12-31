"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isProjectPage = pathname.startsWith("/projects");
  const isAboutPage = pathname === "/about";

  return (
    <header
      id="header-area"
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
    >
      <div className="container mx-auto px-20 py-8">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 hover:text-orange-500 transition"
          >
            Mukti<span className="text-orange-500"> Abdi </span>Syukur
          </Link>

          <div className="flex items-center gap-10">
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
              href="https://drive.google.com/file/d/1Y4d0WF_24jAYxnQfPcVtye-BsxIqmYIJ/view?usp=sharing"
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
        </nav>
      </div>
    </header>
  );
}
