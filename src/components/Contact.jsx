import { useState } from 'react';

export default function Contact({ data, theme }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const message = [
      data.contactSection.form.whatsappTemplate,
      `${data.contactSection.form.whatsappName}: ${form.name || ''}`,
      `${data.contactSection.form.whatsappPhone}: ${form.phone || ''}`,
      `${data.contactSection.form.whatsappService}: ${form.service || ''}`,
      `${data.contactSection.form.whatsappMessage}: ${form.message || ''}`,
    ].join('\n');

    const url = `${data.contact.whatsappHref}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="section-shell py-12">
      <h2 className="text-3xl font-display font-bold" style={{ color: theme.colors.heading }}>
        {data.contactSection.title}
      </h2>
      <p className="mt-2" style={{ color: theme.colors.text }}>
        {data.contactSection.subtitle}
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="grid gap-3 sm:grid-cols-2">
          {data.contactSection.cards.map((card) => (
            <a
              key={card.type}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
              className="focus-ring rounded-2xl border bg-white p-4 transition hover:-translate-y-0.5"
              style={{ borderColor: theme.colors.border, boxShadow: theme.shadow.soft }}
            >
              <p className="text-sm" style={{ color: theme.colors.text }}>
                {card.type}
              </p>
              <p className="mt-1 text-base font-semibold" style={{ color: theme.colors.heading }}>
                {card.value}
              </p>
            </a>
          ))}
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border bg-white p-5"
          style={{ borderColor: theme.colors.border, boxShadow: theme.shadow.soft }}
        >
          <h3 className="text-lg font-display font-semibold" style={{ color: theme.colors.heading }}>
            {data.contactSection.form.title}
          </h3>

          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium" style={{ color: theme.colors.heading }}>
                {data.contactSection.form.fields.name}
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="focus-ring w-full rounded-xl border px-3 py-2"
                style={{ borderColor: theme.colors.border }}
                placeholder={data.contactSection.form.placeholders.name}
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium" style={{ color: theme.colors.heading }}>
                {data.contactSection.form.fields.phone}
              </label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={onChange}
                required
                className="focus-ring w-full rounded-xl border px-3 py-2"
                style={{ borderColor: theme.colors.border }}
                placeholder={data.contactSection.form.placeholders.phone}
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-1 block text-sm font-medium" style={{ color: theme.colors.heading }}>
                {data.contactSection.form.fields.service}
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={onChange}
                required
                className="focus-ring w-full rounded-xl border px-3 py-2"
                style={{ borderColor: theme.colors.border }}
              >
                <option value="">{data.contactSection.form.placeholders.service}</option>
                {data.services.principal.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium" style={{ color: theme.colors.heading }}>
                {data.contactSection.form.fields.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                className="focus-ring min-h-28 w-full rounded-xl border px-3 py-2"
                style={{ borderColor: theme.colors.border }}
                placeholder={data.contactSection.form.placeholders.message}
              />
            </div>

            <button
              type="submit"
              className="focus-ring w-full rounded-xl px-4 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: theme.colors.primary }}
            >
              {data.contactSection.form.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
