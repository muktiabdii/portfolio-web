"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative pt-28 pb-20 px-6 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-orange-300 rounded-full animate-pulse"
          style={{ animationDelay: "75ms" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"
          style={{ animationDelay: "150ms" }}
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50/70 via-white to-orange-50/30 p-12 shadow-xl hover:shadow-2xl transition-all duration-500"
          onMouseMove={handleMouseMove}
        >
          {/* Dynamic glow effect */}
          <div
            className="absolute w-96 h-96 bg-orange-300/20 rounded-full blur-3xl transition-all duration-300 pointer-events-none"
            style={{
              top: `${mousePosition.y - 200}px`,
              left: `${mousePosition.x - 200}px`,
            }}
          />

          {/* Static glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-4 group">
                <h2 className="text-xl text-gray-600 font-medium">
                  Hey There!
                </h2>
                <div className="relative w-12 h-12 animate-bounce">
                  <div className="text-5xl">👋</div>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-6xl font-bold text-gray-900 mb-2">
                  I&apos;m Abdi,
                </h1>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Mobile Developer
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                Student who focusing on mobile development, with
                hands-on experience building backend APIs for real projects.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <a
                  href="mailto:abdisyukur10@gmail.com"
                  className="group flex items-center gap-2 text-gray-700 hover:text-orange-500 transition-all duration-300"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform" />
                  <span className="font-medium">abdisyukur10@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/muktiabdii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Me
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative group">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                {/* Image container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src="/images/abdi-picture.jpg"
                    alt="Muktia Abdi Syukur"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
