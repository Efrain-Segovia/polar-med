export default function Testimonials({ data, theme }) {
  return (
    <section className="section-shell py-12" aria-label={data.testimonials.title}>
      <h2 className="text-3xl font-display font-bold" style={{ color: theme.colors.heading }}>
        {data.testimonials.title}
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {data.testimonials.items.map((item) => (
          <blockquote
            key={item}
            className="rounded-2xl border bg-white p-5 text-sm"
            style={{ borderColor: theme.colors.border, boxShadow: theme.shadow.soft, color: theme.colors.text }}
          >
            {item}
          </blockquote>
        ))}
      </div>
    </section>
  );
}
