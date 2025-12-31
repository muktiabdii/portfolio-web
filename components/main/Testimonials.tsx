"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Editorial Header - CONSISTENT */}
        <div className="mb-24">
          <div className="flex items-end justify-between border-b-2 border-gray-900 pb-6">
            <div>
              <p className="text-sm font-medium text-orange-500 mb-2 tracking-widest uppercase">
                From People I&apos;ve Worked With
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                Testimonials
              </h2>
            </div>
            <p className="text-gray-500 text-lg max-w-xs leading-relaxed hidden md:block">
              Feedback from colleagues and collaborators I've worked with
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            const isHovered = hoveredId === testimonial.id;

            return (
              <article
                key={testimonial.id}
                className={`group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-orange-200 transition-all duration-500
                  ${isHovered ? "shadow-2xl -translate-y-2 scale-[1.02]" : ""}`}
                onMouseEnter={() => setHoveredId(testimonial.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Gradient Top Bar */}
                <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-600 absolute top-0 left-0 right-0 rounded-t-3xl" />

                {/* Quote Icon */}
                <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg
                    className="w-16 h-16 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.5 10c-1.933 0-3.5 1.567-3.5 3.5S4.567 17 6.5 17 10 15.433 10 13.5 8.433 10 6.5 10zm11 0c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5z" />
                    <path d="M9.227 7.671c.127.37.158.783.092 1.216a3.22 3.22 0 01-.472 1.365c-.14.229-.395.586-.852 1.075l-.025.026-.053-.097c-.369-.675-.554-1.424-.554-2.239 0-.94.236-1.768.707-2.485.472-.716 1.125-1.288 1.96-1.716l.079-.041c.146.356.178.736.118 1.896zm11 0c.127.37.158.783.092 1.216a3.22 3.22 0 01-.472 1.365c-.14.229-.395.586-.852 1.075l-.025.026-.053-.097c-.369-.675-.554-1.424-.554-2.239 0-.94.236-1.768.707-2.485.472-.716 1.125-1.288 1.96-1.716l.079-.041c.146.356.178.736.118 1.896z" />
                  </svg>
                </div>

                {/* Avatar & Info */}
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="relative">
                    <div
                      className={`w-20 h-20 rounded-full overflow-hidden ring-4 ring-orange-100 transition-transform duration-500 ${
                        isHovered ? "scale-110" : ""
                      }`}
                    >
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    {/* Online indicator */}
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-4 border-white" />
                  </div>

                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-tight">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <p className="text-gray-600 leading-relaxed italic">
                    "{testimonial.message}"
                  </p>
                </div>

                {/* Hover Indicator */}
                <div
                  className={`absolute bottom-8 left-8 right-8 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full transition-all duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 opacity-5 rounded-tr-3xl rounded-bl-full transition-all duration-500 ${
                    isHovered ? "scale-150" : ""
                  }`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
