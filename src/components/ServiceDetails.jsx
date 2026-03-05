import { useState } from 'react';

export default function ServiceDetails({ data, theme }) {
  const [active, setActive] = useState(data.services.categories[0].id);

  return (
    <section id="servicios-detalle" className="section-shell py-12">
      <h2 className="text-3xl font-display font-bold" style={{ color: theme.colors.heading }}>
        {data.services.detailTitle}
      </h2>
      <p className="mt-2" style={{ color: theme.colors.text }}>
        {data.services.detailSubtitle}
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-[280px_1fr]">
        <div className="space-y-2">
          {data.services.categories.map((category) => {
            const selected = active === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                className="focus-ring w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold transition"
                style={{
                  borderColor: selected ? theme.colors.primary : theme.colors.border,
                  backgroundColor: selected ? theme.colors.primarySoft : theme.colors.surface,
                  color: selected ? theme.colors.primary : theme.colors.heading,
                }}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        <article className="rounded-2xl border bg-white p-6" style={{ borderColor: theme.colors.border, boxShadow: theme.shadow.soft }}>
          {data.services.categories
            .filter((category) => category.id === active)
            .map((category) => (
              <div key={category.id}>
                <h3 className="text-xl font-display font-semibold" style={{ color: theme.colors.heading }}>
                  {category.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-2" style={{ color: theme.colors.text }}>
                      <span aria-hidden="true" style={{ color: theme.colors.secondary }}>{data.ui.bullet}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </article>
      </div>
    </section>
  );
}
