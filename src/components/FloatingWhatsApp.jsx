export default function FloatingWhatsApp({ data, theme }) {
  return (
    <a
      href={`${data.contact.whatsappHref}?text=${encodeURIComponent(data.contact.whatsappPrefill)}`}
      target="_blank"
      rel="noreferrer"
      className="focus-ring fixed bottom-24 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg md:hidden"
      style={{ backgroundColor: theme.colors.secondary }}
      aria-label={data.ctas.whatsapp}
    >
      WA
    </a>
  );
}
