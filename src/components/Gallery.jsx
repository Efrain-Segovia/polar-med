import SafeImage from './SafeImage';

export default function Gallery({ data, theme }) {
  return (
    <section className="section-shell py-12" aria-label={data.gallery.title}>
      <h2 className="text-3xl font-display font-bold" style={{ color: theme.colors.heading }}>
        {data.gallery.title}
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {data.images.gallery.map((image, index) => (
          <SafeImage
            key={image}
            src={image}
            alt={`${data.gallery.title} ${index + 1}`}
            className="h-32 w-full rounded-xl object-cover sm:h-36"
            style={{ boxShadow: theme.shadow.soft }}
          />
        ))}
      </div>
    </section>
  );
}
