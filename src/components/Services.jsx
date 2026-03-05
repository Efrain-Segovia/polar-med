export default function Services({ data, theme }) {
  return (
    <section id="servicios" className="section-shell py-12">
      <h2 className="text-3xl font-display font-bold" style={{ color: theme.colors.heading }}>
        {data.services.title}
      </h2>
      <p className="mt-2" style={{ color: theme.colors.text }}>
        {data.services.subtitle}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.services.principal.map((service) => (
          <article
            key={service}
            className="rounded-2xl border bg-white p-5"
            style={{ borderColor: theme.colors.border, boxShadow: theme.shadow.soft }}
          >
            <h3 className="text-lg font-display font-semibold" style={{ color: theme.colors.heading }}>
              {service}
            </h3>
          </article>
        ))}
      </div>

      <a
        href="#servicios-detalle"
        className="focus-ring mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white"
        style={{ backgroundColor: theme.colors.secondary }}
      >
        {data.ctas.details}
      </a>
    </section>
  );
}
