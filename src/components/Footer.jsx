import BrandLogo from './BrandLogo';

export default function Footer({ data, theme }) {
  return (
    <footer className="border-t bg-white" style={{ borderColor: theme.colors.border }}>
      <div className="section-shell grid gap-4 py-8 sm:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2">
            <BrandLogo data={data} className="h-10 w-auto" />
            <p className="text-lg font-display font-semibold" style={{ color: theme.colors.heading }}>
              {data.brand.name}
            </p>
          </div>
          <p className="text-sm" style={{ color: theme.colors.text }}>
            {data.brand.tagline}
          </p>
          <p className="mt-3 text-sm" style={{ color: theme.colors.text }}>
            {data.contact.address}
          </p>
          <a href={data.contact.phoneHref} className="focus-ring mt-1 block text-sm" style={{ color: theme.colors.text }}>
            {data.contact.phoneLabel}
          </a>
        </div>

        <div className="sm:text-right">
          <a
            href={data.contact.facebookHref}
            target="_blank"
            rel="noreferrer"
            className="focus-ring block text-sm"
            style={{ color: theme.colors.text }}
          >
            {data.ui.facebookPrefix}: {data.contact.facebookLabel}
          </a>
          <a
            href={data.contact.instagramHref}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-1 block text-sm"
            style={{ color: theme.colors.text }}
          >
            {data.ui.instagramPrefix}: {data.contact.instagramLabel}
          </a>
          <p className="mt-3 text-sm" style={{ color: theme.colors.text }}>
            {data.footer.privacyNotice}
          </p>
          <p className="mt-1 text-sm" style={{ color: theme.colors.text }}>
            {data.brand.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
