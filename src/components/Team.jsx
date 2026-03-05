export default function Team({ data, theme }) {
  return (
    <section id="equipo" className="section-shell py-12">
      <h2 className="text-3xl font-display font-bold" style={{ color: theme.colors.heading }}>
        {data.team.title}
      </h2>
      <p className="mt-2" style={{ color: theme.colors.text }}>
        {data.team.subtitle}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {data.team.members.map((member) => (
          <article
            key={member.area}
            className="rounded-2xl border bg-white p-5"
            style={{ borderColor: theme.colors.border, boxShadow: theme.shadow.soft }}
          >
            <p className="text-sm font-semibold" style={{ color: theme.colors.secondary }}>
              {member.area}
            </p>
            <h3 className="mt-2 text-lg font-display font-semibold" style={{ color: theme.colors.heading }}>
              {member.name}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
