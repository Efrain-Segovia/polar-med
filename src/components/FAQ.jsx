export default function FAQ({ data, theme }) {
  return (
    <section className="section-shell py-12" aria-label={data.faq.title}>
      <h2 className="text-3xl font-display font-bold" style={{ color: theme.colors.heading }}>
        {data.faq.title}
      </h2>

      <div className="mt-6 space-y-3">
        {data.faq.items.map((item) => (
          <details
            key={item.question}
            className="rounded-xl border bg-white p-4"
            style={{ borderColor: theme.colors.border, boxShadow: theme.shadow.soft }}
          >
            <summary className="cursor-pointer font-semibold" style={{ color: theme.colors.heading }}>
              {item.question}
            </summary>
            <p className="mt-2 text-sm" style={{ color: theme.colors.text }}>
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
