"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Editorial Header */}
        <div className="mb-24">
          <div className="flex items-end justify-between border-b-2 border-gray-900 pb-6">
            <div>
              <p className="text-sm font-medium text-orange-500 mb-2 tracking-widest uppercase">
                Selected Works
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                Projects
              </h2>
            </div>
            <p className="text-gray-500 text-lg max-w-xs leading-relaxed hidden md:block">
              A curated collection of impactful digital experiences
            </p>
          </div>
        </div>

        {/* Editorial Project Cards */}
        <div className="space-y-24">
          {projects.slice(0, 4).map((project, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredId === project.id;

            return (
              <article
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Image Side */}
                  <div
                    className={`relative lg:col-span-7 ${
                      isEven ? "" : "lg:col-start-6"
                    }`}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
                      <div
                        className={`absolute inset-0 transition-transform duration-700 ${
                          isHovered ? "scale-105" : "scale-100"
                        }`}
                      >
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover"
                          priority={index < 2}
                        />
                      </div>

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 ${
                          isHovered ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`lg:col-span-5 space-y-6 ${
                      isEven ? "" : "lg:col-start-1 lg:row-start-1"
                    }`}
                  >
                    {/* Role Tag */}
                    <div className="inline-flex items-center gap-2">
                      <div className="w-12 h-[2px] bg-orange-500" />
                      <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                        {project.role}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* CTA Link */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="group/link inline-flex items-center gap-3 text-gray-900 font-semibold text-lg hover:text-orange-500 transition-colors duration-300"
                    >
                      <span className="border-b-2 border-gray-900 group-hover/link:border-orange-500 transition-colors duration-300">
                        View Case Study
                      </span>
                      <svg
                        className="w-6 h-6 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </Link>

                    {/* Decorative Element */}
                    <div
                      className={`w-24 h-1 bg-gradient-to-r from-orange-500 to-transparent transition-all duration-500 ${
                        isHovered ? "w-32" : "w-24"
                      }`}
                    />
                  </div>
                </div>

                {/* Divider Line */}
                {index < projects.slice(0, 4).length - 1 && (
                  <div className="mt-24 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                )}
              </article>
            );
          })}
        </div>

        {/* Editorial CTA Footer */}
        <div className="mt-32 pt-16 border-t-2 border-gray-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-gray-900">
                Want to see more?
              </h3>
              <p className="text-gray-600">
                Explore my complete portfolio of work
              </p>
            </div>
            <Link
              href="/projects"
              className="group relative px-10 py-5 bg-gray-900 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                View All Projects
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
