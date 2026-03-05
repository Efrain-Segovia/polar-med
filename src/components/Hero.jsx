import SafeImage from './SafeImage';

export default function Hero({ data, theme }) {
  const whatsappHref = `${data.contact.whatsappHref}?text=${encodeURIComponent(data.contact.whatsappPrefill)}`;

  return (
    <section id="inicio" className="section-shell grid gap-8 py-10 md:grid-cols-2 md:items-center md:py-16">
      <div>
        <p
          className="mb-3 inline-flex rounded-full px-3 py-1 text-sm font-semibold"
          style={{ backgroundColor: theme.colors.primarySoft, color: theme.colors.primary }}
        >
          {data.brand.tagline}
        </p>
        <h1 className="text-4xl font-display font-bold leading-tight sm:text-5xl" style={{ color: theme.colors.heading }}>
          {data.brand.name}
        </h1>
        <p className="mt-4 max-w-xl text-base sm:text-lg" style={{ color: theme.colors.text }}>
          {data.brand.heroTrustText}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-full px-5 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: theme.colors.primary }}
          >
            {data.ctas.whatsapp}
          </a>
          <a
            href={data.contact.phoneHref}
            className="focus-ring rounded-full border px-5 py-3 text-sm font-semibold"
            style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}
          >
            {data.ctas.call}
          </a>
        </div>
      </div>

      <div>
        <SafeImage
          src={data.images.hero}
          alt={data.brand.name}
          className="h-full min-h-[280px] w-full rounded-3xl object-cover"
          style={{ boxShadow: theme.shadow.card }}
        />
      </div>
    </section>
  );
}
