"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { educations } from "@/data/educations";
import { experiences } from "@/data/experiences";
import { features } from "@/data/features";

export default function AboutMePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-orange-50/50 to-white overflow-hidden" data-aos="fade-up">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/abdi-picture.jpg"
                  alt="Muktia Abdi Syukur"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-white rounded-2xl shadow-xl border-2 border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-bold text-gray-900">
                    Open for Internship
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
                <span className="text-2xl animate-bounce">👋</span>
                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                  Nice to meet you!
                </span>
              </div>

              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Mukti Abdi Syukur
                </span>
              </h1>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm a{" "}
                  <strong className="text-gray-900">
                    Mobile and Backend Developer
                  </strong>{" "}
                  focusing on Android and API-driven applications. Currently a
                  student at Universitas Brawijaya, passionate about building
                  meaningful digital products.
                </p>
                <p>
                  I have completed{" "}
                  <strong className="text-gray-900">
                    {projects.length}+ projects
                  </strong>{" "}
                  and participated in{" "}
                  <strong className="text-gray-900">5+ competitions</strong>. I
                  enjoy building mobile applications that solve real-world
                  problems through clean architecture, thoughtful feature
                  design, and reliable backend integration.
                </p>
                <p>
                  I enjoy working on{" "}
                  <em className="text-orange-600">
                    problem solving tasks, building mobile apps, and designing
                    clean, maintainable systems.
                  </em>{" "}
                  I&apos;m especially interested in how backend services and
                  APIs power great user experiences.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="https://linkedin.com/in/muktiabdii"
                  target="_blank"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/muktiabdii"
                  target="_blank"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
                >
                  GitHub
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1re-Nap5dYh-XlGvvohu2q3iM6YmCzKl4/view?usp=drive_link"
                  target="_blank"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-32 px-6 bg-white" data-aos="fade-up" data-aos-delay="200">
        <div className="container mx-auto max-w-7xl">
          {/* Editorial Header */}
          <div className="mb-24">
            <div className="flex items-end justify-between border-b-2 border-gray-900 pb-6">
              <div>
                <p className="text-sm font-medium text-orange-500 mb-2 tracking-widest uppercase">
                  Academic Journey
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                  Education
                </h2>
              </div>
              <p className="text-gray-500 text-lg max-w-xs leading-relaxed hidden md:block">
                My academic background and learning experience
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {educations.map((education) => (
              <article
                key={education.id}
                className="group relative"
                onMouseEnter={() => setHoveredId(education.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="flex gap-8">
                  {/* Period */}
                  <div className="flex-shrink-0 w-40">
                    <div
                      className={`inline-flex px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                        hoveredId === education.id
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {education.period}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12 border-l-2 border-gray-200 pl-8 relative">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full transition-all duration-300 ${
                        hoveredId === education.id
                          ? "bg-orange-500 scale-125"
                          : "bg-gray-300"
                      }`}
                    />

                    <div className="space-y-3">
                      <h3 className="text-3xl font-bold text-gray-900">
                        {education.institution}
                      </h3>
                      <p className="text-orange-500 font-semibold">
                        {education.degree}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {education.location}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {education.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white" data-aos="fade-up" data-aos-delay="100">
        <div className="container mx-auto max-w-7xl">
          {/* Editorial Header */}
          <div className="mb-24">
            <div className="flex items-end justify-between border-b-2 border-gray-900 pb-6">
              <div>
                <p className="text-sm font-medium text-orange-500 mb-2 tracking-widest uppercase">
                  Leadership & Involvement
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                  Experience
                </h2>
              </div>
              <p className="text-gray-500 text-lg max-w-xs leading-relaxed hidden md:block">
                Leadership roles and organizational involvement
              </p>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-600 absolute top-0 left-0 right-0 rounded-t-3xl" />

                <div className="space-y-4 pt-4">
                  <div className="inline-flex px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full">
                    {exp.period}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.role}
                  </h3>

                  <p className="text-orange-500 font-semibold">
                    {exp.organization}
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-2 text-sm text-gray-700">
                        <svg
                          className="w-4 h-4 text-orange-500 shrink-0 mt-[2px]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 px-6 bg-white" data-aos="fade-up" data-aos-delay="200">
        <div className="container mx-auto max-w-7xl">
          {/* Editorial Header */}
          <div className="mb-24">
            <div className="flex items-end justify-between border-b-2 border-gray-900 pb-6">
              <div>
                <p className="text-sm font-medium text-orange-500 mb-2 tracking-widest uppercase">
                  Achievements
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                  Highlights
                </h2>
              </div>
              <p className="text-gray-500 text-lg max-w-xs leading-relaxed hidden md:block">
                Awards, competitions, and key milestones from my academic and
                technical journey
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <article
                key={i}
                className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-orange-600 font-bold text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Checkmark Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-orange-500/30">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Content */}
                <p className="text-gray-900 text-lg leading-relaxed font-medium">
                  {feature.content}
                </p>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
