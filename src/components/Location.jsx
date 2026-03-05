export default function Location({ data, theme }) {
  return (
    <section id="ubicacion" className="section-shell py-12">
      <h2 className="text-3xl font-display font-bold" style={{ color: theme.colors.heading }}>
        {data.location.title}
      </h2>
      <p className="mt-2" style={{ color: theme.colors.text }}>
        {data.location.subtitle}
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border bg-white p-5" style={{ borderColor: theme.colors.border, boxShadow: theme.shadow.soft }}>
          <p className="text-base font-medium" style={{ color: theme.colors.heading }}>
            {data.contact.address}
          </p>
          <a
            href={data.contact.mapsQueryHref}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-4 inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white"
            style={{ backgroundColor: theme.colors.primary }}
          >
            {data.ctas.howToGet}
          </a>
        </article>

        <div className="overflow-hidden rounded-2xl border bg-white" style={{ borderColor: theme.colors.border, boxShadow: theme.shadow.soft }}>
          <iframe
            title={data.location.title}
            src={data.contact.mapsEmbedUrl}
            className="h-72 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
