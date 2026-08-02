"use client";

import { use } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const projectData = projects.find((p) => p.slug === id || p.id === Number(id));
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-orange-500 hover:text-orange-600">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const totalImages = projectData.screenshots.length;

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const hasAI = (projectData.techStack.ai?.length ?? 0) > 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-orange-50/50 to-white overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2">
                <div className="w-12 h-[2px] bg-orange-500" />
                <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                  {projectData.role}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {projectData.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                {projectData.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">
                    {projectData.techStack.frontend.length + projectData.techStack.backend.length}+
                  </div>
                  <div className="text-sm text-gray-600">Technologies</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">
                    {projectData.keyFeatures.length}
                  </div>
                  <div className="text-sm text-gray-600">Key Features</div>
                </div>
              </div>

              {/* GitHub Link */}
              {projectData.githubUrl && (
                <div className="pt-6">
                  <a
                    href={projectData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>View on GitHub</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                <Image src={projectData.coverImage} alt={projectData.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview - TWO COLUMN */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="flex items-end justify-between border-b-2 border-gray-900 pb-6">
              <div>
                <p className="text-sm font-medium text-orange-500 mb-2 tracking-widest uppercase">
                  Understanding the Context
                </p>
                <h2 className="text-7xl font-bold text-gray-900 tracking-tight">Overview</h2>
              </div>
              <p className="text-gray-500 text-lg max-w-xs leading-relaxed hidden md:block">
                The problem we aimed to solve and project purpose
              </p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-orange-500 uppercase tracking-wide">The Problem</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{projectData.overview.problem}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-orange-500 uppercase tracking-wide">The Purpose</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{projectData.overview.purpose}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Role & Responsibilities - FULL WIDTH GRID */}
      <section className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="flex items-end justify-between border-b-2 border-gray-900 pb-6">
              <div>
                <p className="text-sm font-medium text-orange-500 mb-2 tracking-widest uppercase">
                  My Contributions
                </p>
                <h2 className="text-7xl font-bold text-gray-900 tracking-tight">Responsibilities</h2>
              </div>
              <p className="text-gray-500 text-lg max-w-xs leading-relaxed hidden md:block">
                What I personally worked on in this project
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.responsibilities.map((item, index) => (
              <div key={index} className="flex gap-4 items-start p-6 bg-white rounded-xl hover:shadow-lg transition-all">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - FULL WIDTH */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="flex items-end justify-between border-b-2 border-gray-900 pb-6">
              <div>
                <p className="text-sm font-medium text-orange-500 mb-2 tracking-widest uppercase">
                  Technologies Used
                </p>
                <h2 className="text-7xl font-bold text-gray-900 tracking-tight">Tech Stack</h2>
              </div>
              <p className="text-gray-500 text-lg max-w-xs leading-relaxed hidden md:block">
                Tools and frameworks powering this project
              </p>
            </div>
          </div>

          <div className={`grid gap-8 ${hasAI ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"}`}>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <span className="text-3xl">📱</span> Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {projectData.techStack.frontend.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <span className="text-3xl">⚙️</span> Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {projectData.techStack.backend.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {hasAI && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="text-3xl">🤖</span> AI/ML
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projectData.techStack.ai!.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <span className="text-3xl">🛠️</span> Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {projectData.techStack.tools.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - FULL WIDTH */}
      <section className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="flex items-end justify-between border-b-2 border-gray-900 pb-6">
              <div>
                <p className="text-sm font-medium text-orange-500 mb-2 tracking-widest uppercase">
                  Core Functionality
                </p>
                <h2 className="text-7xl font-bold text-gray-900 tracking-tight">Features</h2>
              </div>
              <p className="text-gray-500 text-lg max-w-xs leading-relaxed hidden md:block">
                Main capabilities that make this project unique
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI Screenshots - CENTERED */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-medium text-orange-500 mb-4 tracking-widest uppercase">
              Visual Design
            </p>
            <h2 className="text-7xl font-bold text-gray-900 tracking-tight mb-6">UI Showcase</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Interface design and user experience highlights
            </p>
          </div>

          <div className="mb-12">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src={projectData.screenshots[activeImageIndex].url}
                alt={projectData.screenshots[activeImageIndex].caption}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

              <div className="absolute inset-0 flex items-center justify-between px-6">
                <button
                  onClick={handlePrev}
                  className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 hover:bg-orange-500 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 hover:bg-orange-500 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-gray-900/80 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                {activeImageIndex + 1} / {totalImages}
              </div>
            </div>

            <p className="text-center text-gray-600 mt-6 text-lg">
              {projectData.screenshots[activeImageIndex].caption}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectData.screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-300 ${
                  activeImageIndex === index
                    ? "ring-4 ring-orange-500 shadow-xl scale-105"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
              >
                <Image src={screenshot.url} alt={screenshot.caption} fill className="object-cover" />
                {activeImageIndex === index && <div className="absolute inset-0 bg-orange-500/20" />}
                <div className={`absolute top-2 left-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  activeImageIndex === index ? "bg-orange-500 text-white" : "bg-gray-900/60 text-white"
                }`}>
                  {index + 1}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges - TWO COLUMN */}
      <section className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="flex items-end justify-between border-b-2 border-gray-900 pb-6">
              <div>
                <p className="text-sm font-medium text-orange-500 mb-2 tracking-widest uppercase">
                  Technical Journey
                </p>
                <h2 className="text-7xl font-bold text-gray-900 tracking-tight">Challenges</h2>
              </div>
              <p className="text-gray-500 text-lg max-w-xs leading-relaxed hidden md:block">
                Obstacles faced and lessons learned along the way
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectData.challenges.map((item, index) => (
              <div key={index} className="border-l-4 border-orange-500 pl-8 py-6 bg-white rounded-r-2xl hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.challenge}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{item.learning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome - CENTERED */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-medium text-orange-500 mb-4 tracking-widest uppercase">
              Results & Achievements
            </p>
            <h2 className="text-7xl font-bold text-gray-900 tracking-tight mb-6">Impact</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Measurable outcomes and project success metrics
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-12 border-2 border-orange-100 max-w-4xl mx-auto">
            <div className="space-y-6">
              {projectData.outcome.metrics.map((metric, index) => (
                <div key={index} className="flex items-start gap-6">
                  <span className="text-4xl">{metric.split(" ")[0]}</span>
                  <p className="text-xl text-gray-700 pt-2">{metric.substring(metric.indexOf(" ") + 1)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Improvements - FULL WIDTH */}
      <section className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="flex items-end justify-between border-b-2 border-gray-900 pb-6">
              <div>
                <p className="text-sm font-medium text-orange-500 mb-2 tracking-widest uppercase">Next Steps</p>
                <h2 className="text-7xl font-bold text-gray-900 tracking-tight">Future Plans</h2>
              </div>
              <p className="text-gray-500 text-lg max-w-xs leading-relaxed hidden md:block">
                Potential enhancements and upcoming features
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.futureImprovements.map((item, index) => (
              <div key={index} className="flex gap-4 items-start p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
                <span className="text-3xl">💡</span>
                <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}