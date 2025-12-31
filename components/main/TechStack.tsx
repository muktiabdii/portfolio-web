"use client";

import { useState } from "react";
import Image from "next/image";
import { techStacks } from "@/data/techStacks";

export default function TechStackSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Editorial Header - CONSISTENT */}
        <div className="mb-24">
          <div className="flex items-end justify-between border-b-2 border-gray-900 pb-6">
            <div>
              <p className="text-sm font-medium text-orange-500 mb-2 tracking-widest uppercase">
                Technologies & Tools
              </p>
              <h2 className="text-7xl font-bold text-gray-900 tracking-tight">
                Tech Stack
              </h2>
            </div>
            <p className="text-gray-500 text-lg max-w-xs leading-relaxed hidden md:block">
              Technologies I use across mobile development and backend projects
            </p>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStacks.map((techStack, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredTech(techStack.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div
                className={`relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 ${
                  hoveredTech === techStack.name ? "scale-110 -translate-y-2" : ""
                }`}
              >
                {/* Category Badge */}
                <div
                  className={`absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  {techStack.category}
                </div>

                {/* Logo */}
                <div className="relative aspect-square mb-3">
                  <Image
                    src={techStack.image}
                    alt={techStack.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Name */}
                <p className="text-center font-semibold text-gray-700 text-sm">
                  {techStack.name}
                </p>

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}