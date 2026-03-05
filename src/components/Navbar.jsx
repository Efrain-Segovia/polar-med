import { useState } from 'react';
import BrandLogo from './BrandLogo';

export default function Navbar({ data, theme }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur"
      style={{ borderColor: theme.colors.border }}
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-4" aria-label="Navegación principal">
        <a href="#inicio" className="focus-ring inline-flex items-center gap-2 rounded-md" style={{ color: theme.colors.heading }}>
          <BrandLogo data={data} className="h-10 w-auto" />
          <span className="text-lg font-display font-semibold">{data.brand.name}</span>
        </a>

        <button
          type="button"
          className="focus-ring rounded-lg border px-3 py-2 text-sm md:hidden"
          style={{ borderColor: theme.colors.border, color: theme.colors.heading }}
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? data.ui.menuClose : data.ui.menuOpen}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {data.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md px-2 py-1 text-sm font-medium transition hover:opacity-80"
              style={{ color: theme.colors.text }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${data.contact.whatsappHref}?text=${encodeURIComponent(data.contact.whatsappPrefill)}`}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: theme.colors.primary }}
          >
            {data.nav.whatsappCta}
          </a>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t md:hidden" style={{ borderColor: theme.colors.border }}>
          <div className="section-shell flex flex-col gap-1 py-3">
            {data.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-md px-2 py-2 text-sm"
                style={{ color: theme.colors.text }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${data.contact.whatsappHref}?text=${encodeURIComponent(data.contact.whatsappPrefill)}`}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-2 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: theme.colors.primary }}
            >
              {data.nav.whatsappCta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
