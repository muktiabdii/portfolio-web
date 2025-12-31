"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/main/Header";
import CTASection from "../../components/main/CTA";
import { projects as allProjects } from "@/data/projects";

const categories = ["All", "Mobile Development", "Web Development"];

export default function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="pt-35 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              All Projects
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              A curated collection of mobile and web development projects,
              ranging from academic work to real world and competition based
              applications.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-orange-500">
                  {allProjects.length}+
                </div>
                <div className="text-sm text-gray-600">Projects Built</div>
              </div>

              <div>
                <div className="text-4xl font-bold text-orange-500">2</div>
                <div className="text-sm text-gray-600">Main Focus Areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 py-6 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="text-sm font-medium text-gray-600 whitespace-nowrap">
              {filteredProjects.length} Projects
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Card */}
                <div className="relative bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <div
                      className={`absolute inset-0 transition-transform duration-700 ${
                        hoveredId === project.id ? "scale-105" : "scale-100"
                      }`}
                    >
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 ${
                        hoveredId === project.id ? "opacity-80" : "opacity-60"
                      }`}
                    />

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-orange-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    {/* Role */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-[2px] bg-orange-500" />
                      <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
                        {project.role}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* CTA */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-gray-900 font-semibold group/link hover:text-orange-500 transition-colors duration-300"
                    >
                      <span className="border-b-2 border-gray-900 group-hover/link:border-orange-500 transition-colors duration-300">
                        View Details
                      </span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1"
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
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
