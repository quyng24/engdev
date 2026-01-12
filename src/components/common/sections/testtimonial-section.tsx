export default function TesttimonialSection() {
  return (
    <section className="min-h-[60vh] py-20 text-center space-y-12 flex flex-col justify-center">
      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">What Our Students Say</h2>

        <div className="flex justify-center items-center gap-2 text-lg md:text-xl">
          <Stars />
          <span className="font-medium">Trusted by 50,000+ Learners</span>
          </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        <TestimonialCard
          name="Sarah Jenkins"
          role="Intermediate Student"
          text="The AI tutor is a total game changer! My pronunciation has improved significantly in just a month."
          time="2 days ago"
        />

        <TestimonialCard
          name="Marcus Chen"
          role="Business English Student"
          text="The interactive lessons feel like real conversations rather than boring grammar drills."
          time="1 week ago"
        />

        <TestimonialCard
          name="Elena Rodriguez"
          role="Advanced Learner"
          text="I love how I can track my progress every day. Cultural tips are super helpful too."
          time="2 weeks ago"
        />
      </div>
    </section>
  )
}

function Stars() {
  return <span className="text-yellow-400">★★★★★</span>;
}

function TestimonialCard({
  name,
  role,
  text,
  time,
}: {
  name: string;
  role: string;
  text: string;
  time: string;
}) {
  return (
    <div className="bg-surface border border-border rounded-2xl p-8 text-left space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-muted/20" />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted">{role}</p>
        </div>
      </div>

      <Stars />

      <p className="text-sm leading-relaxed text-muted">{text}</p>

      <div className="flex justify-between text-xs text-muted">
        <span className="text-primary">✔ Verified Learner</span>
        <span>{time}</span>
      </div>
    </div>
  );
}