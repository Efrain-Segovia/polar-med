export default function MobileStickyCta({ data, theme }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-white p-3 md:hidden" style={{ borderColor: theme.colors.border }}>
      <div className="mx-auto grid max-w-xl grid-cols-2 gap-2">
        <a
          href={`${data.contact.whatsappHref}?text=${encodeURIComponent(data.contact.whatsappPrefill)}`}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: theme.colors.primary }}
        >
          {data.ctas.whatsapp}
        </a>
        <a
          href={data.contact.phoneHref}
          className="focus-ring inline-flex items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold"
          style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}
        >
          {data.ctas.call}
        </a>
      </div>
    </div>
  );
}
