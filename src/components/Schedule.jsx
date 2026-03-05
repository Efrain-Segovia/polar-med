export default function Schedule({ data, theme }) {
  return (
    <section id="horarios" className="section-shell py-12">
      <h2 className="text-3xl font-display font-bold" style={{ color: theme.colors.heading }}>
        {data.hours.title}
      </h2>
      <p className="mt-2" style={{ color: theme.colors.text }}>
        {data.hours.subtitle}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {data.hours.items.map((item) => (
          <article
            key={item.service}
            className="rounded-2xl border bg-white p-5"
            style={{ borderColor: theme.colors.border, boxShadow: theme.shadow.soft }}
          >
            <h3 className="text-lg font-display font-semibold" style={{ color: theme.colors.heading }}>
              {item.service}
            </h3>
            <ul className="mt-3 space-y-1">
              {item.schedule.map((line) => (
                <li key={line} className="text-sm" style={{ color: theme.colors.text }}>
                  {line}
                </li>
              ))}
            </ul>
            {item.highlight && (
              <p
                className="mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: theme.colors.secondarySoft, color: theme.colors.secondary }}
              >
                {item.highlight}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
