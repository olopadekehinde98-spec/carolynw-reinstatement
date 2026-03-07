const items = [
  {
    name: "Seller",
    quote:
      "Clear explanation and organized steps. Helped me understand what Amazon wanted and what documents mattered.",
  },
  {
    name: "Brand Owner",
    quote:
      "Very professional, fast communication, and a solid structure for appeal and prevention steps.",
  },
  {
    name: "FBA Seller",
    quote:
      "Great guidance for verification preparation. The checklist made the process simple and clear.",
  },
];

export default function Testimonials() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">What sellers say</h2>
      <p className="mt-2 text-sm text-slate-700">
        Real results vary; feedback reflects individual experiences.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((t) => (
          <div
            key={t.quote}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-slate-700">“{t.quote}”</p>
            <p className="mt-4 text-xs font-semibold text-slate-900">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}