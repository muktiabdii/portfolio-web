"use client";

import { useState } from "react";
import { skills } from "@/data/skills";

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: "from-blue-500 to-blue-600",
      light: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      hover: "hover:border-blue-500"
    },
    green: {
      bg: "from-green-500 to-green-600",
      light: "bg-green-50",
      text: "text-green-600",
      border: "border-green-200",
      hover: "hover:border-green-500"
    },
    purple: {
      bg: "from-purple-500 to-purple-600",
      light: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
      hover: "hover:border-purple-500"
    },
    orange: {
      bg: "from-orange-500 to-orange-600",
      light: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
      hover: "hover:border-orange-500"
    }
  };
  return colors[color as keyof typeof colors];
};

export default function Skills() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Editorial Header - CONSISTENT WITH PROJECTS */}
        <div className="mb-24">
          <div className="flex items-end justify-between border-b-2 border-gray-900 pb-6">
            <div>
              <p className="text-sm font-medium text-orange-500 mb-2 tracking-widest uppercase">
                Core Capabilities
              </p>
              <h2 className="text-7xl font-bold text-gray-900 tracking-tight">
                Skills
              </h2>
            </div>
            <p className="text-gray-500 text-lg max-w-xs leading-relaxed hidden md:block">
              A comprehensive skill set for building scalable applications
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => {
            const colors = getColorClasses(skill.color);
            const isHovered = hoveredId === skill.id;

            return (
              <article
                key={skill.id}
                className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 border-2 ${colors.border} ${colors.hover} ${
                  isHovered ? "shadow-2xl -translate-y-2 scale-[1.02]" : "shadow-lg"
                }`}
                onMouseEnter={() => setHoveredId(skill.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${colors.bg}`} />

                <div className="p-8">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`relative ${colors.light} rounded-2xl p-4 transition-transform duration-500 ${
                      isHovered ? "scale-110 rotate-6" : ""
                    }`}>
                      <span className="text-5xl">{skill.icon}</span>
                      
                      {/* Pulse effect */}
                      {isHovered && (
                        <div className={`absolute inset-0 ${colors.light} rounded-2xl animate-ping opacity-75`} />
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {skill.title}
                      </h3>
                      <p className={`text-sm font-semibold ${colors.text} uppercase tracking-wide`}>
                        {skill.subtitle}
                      </p>
                    </div>

                    {/* Number Badge */}
                    <div className={`w-10 h-10 rounded-full ${colors.light} flex items-center justify-center`}>
                      <span className={`text-sm font-bold ${colors.text}`}>
                        {String(skill.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {skill.description}
                  </p>

                  {/* Divider */}
                  <div className={`h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6`} />

                  {/* Skills List */}
                  <div className="space-y-3">
                    {skill.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 group/item"
                        style={{
                          transitionDelay: `${index * 50}ms`
                        }}
                      >
                        <div className={`w-5 h-5 rounded-full ${colors.light} flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
                          isHovered ? "scale-110" : ""
                        }`}>
                          <svg className={`w-3 h-3 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-tight group-hover/item:text-gray-900 transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Indicator */}
                  <div className={`mt-6 flex items-center gap-2 transition-all duration-500 ${
                    isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}>
                    <div className={`h-px flex-1 bg-gradient-to-r ${colors.bg}`} />
                    <span className={`text-xs font-semibold ${colors.text} uppercase tracking-wider`}>
                      Core Expertise
                    </span>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.bg} opacity-5 rounded-bl-full transition-all duration-500 ${
                  isHovered ? "scale-150" : ""
                }`} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
