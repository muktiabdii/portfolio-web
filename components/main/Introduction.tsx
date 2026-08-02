export default function Introduction() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl text-center space-y-6">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Currently studying at
          <span className="text-orange-500"> Brawijaya University</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 font-medium">
          Information Technology Bachelor
        </p>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
          I enjoy working across the stack, from designing well-structured backend APIs to building clean, 
          user-facing Android applications. I care about how systems are architected just as much as how they're experienced.
        </p>
      </div>
    </section>
  );
}
