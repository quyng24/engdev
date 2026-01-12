export default function FeatureSection() {
  return (
    <section className="min-h-[60vh] py-20 space-y-12">
      {/* Header */}
      <div className="max-w-2xl space-y-4">
        <p className="text-lg md:text-xl text-[#0edbca] font-bold tracking-wide uppercase">
          Why choose us
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Our modular approach ensures you learn faster.
        </h2>

        <p className="text-[#0edbca] text-lg md:text-xl font-semibold">
          Scientifically proven methods combined with cutting-edge technology to
          accelerate your linguistic journey.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon="▶"
          title="Interactive Lessons"
          desc="Engage with real-world scenarios through immersive video and audio
          exercises that feel like actual conversations."
        />

        <FeatureCard
          icon="🤖"
          title="AI Personal Tutor"
          desc="Get 24/7 instant feedback on your pronunciation and grammar with our
          advanced voice recognition AI system."
        />

        <FeatureCard
          icon="📊"
          title="Progress Tracking"
          desc="Visualize your journey with detailed analytics and personalized
          milestones that keep you motivated and on track."
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-surface border border-border rounded-2xl p-8 space-y-4">
      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl text-xl">
        {icon}
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-muted text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
