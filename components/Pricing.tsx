import Link from "next/link";

const tiers = [
  {
    name: "Starter Review",
    price: "€9",
    bullets: ["Review suspension notice", "Risk factors checklist", "Next-step guidance"],
  },
  {
    name: "Action Plan",
    price: "Custom",
    bullets: ["Evidence mapping", "Corrective actions + prevention", "Draft structure + messaging guidance"],
    featured: true,
  },
  {
    name: "Full Support",
    price: "Custom",
    bullets: ["End-to-end drafting support", "Multiple revisions", "Submission-ready format"],
  },
];

export default function Pricing() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">Pricing</h2>
      <p className="mt-2 text-sm text-slate-700">
        Pricing depends on case type and complexity. Start intake for an accurate recommendation.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={[
              "rounded-3xl border p-6 shadow-sm",
              t.featured ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-900",
            ].join(" ")}
          >
            <div className="flex items-end justify-between">
              <h3 className="text-base font-semibold">{t.name}</h3>
              <p className={t.featured ? "text-white/90" : "text-slate-700"}>{t.price}</p>
            </div>

            <ul className={["mt-4 space-y-2 text-sm", t.featured ? "text-white/80" : "text-slate-700"].join(" ")}>
              {t.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>

            <Link
              href="/intake"
              className={[
                "mt-6 inline-flex w-full justify-center rounded-xl px-5 py-3 text-sm font-semibold",
                t.featured ? "bg-white text-slate-900 hover:bg-white/90" : "bg-slate-900 text-white hover:bg-slate-800",
              ].join(" ")}
            >
              Start Case Intake
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}