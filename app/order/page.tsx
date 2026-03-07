"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

const fiverrLink = "https://www.fiverr.com/s/e6ajg6g";

// Stripe Payment Links (your links)
const STRIPE_STARTER = "https://buy.stripe.com/test_9B66oH0qn8J72rF4Rscwg00"; // €9
const STRIPE_ACTION_DEPOSIT = "https://buy.stripe.com/test_3cIbJ12yv8J77LZdnYcwg01"; // €100
const STRIPE_FULL_DEPOSIT = "https://buy.stripe.com/test_fZu8wP5KHaRf6HVdnYcwg02"; // €200

type Package = {
  name: string;
  priceLabel: string;
  desc: string;
  payLink: string;
  featured?: boolean;
  note?: string;
};

const packages: Package[] = [
  {
    name: "Starter Review",
    priceLabel: "€9",
    desc: "Suspension notice review + clear next steps.",
    payLink: STRIPE_STARTER,
  },
  {
    name: "Action Plan (Deposit)",
    priceLabel: "€100 deposit",
    desc: "Evidence mapping + corrective actions + prevention plan.",
    note: "If additional work is needed, I’ll confirm the remaining balance before continuing.",
    featured: true,
    payLink: STRIPE_ACTION_DEPOSIT,
  },
  {
    name: "Full Support (Deposit)",
    priceLabel: "€200 deposit",
    desc: "End-to-end drafting support + revisions.",
    note: "If additional work is needed, I’ll confirm the remaining balance before continuing.",
    payLink: STRIPE_FULL_DEPOSIT,
  },
];

export default function OrderPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-12 pb-14">
        <h1 className="text-3xl font-bold tracking-tight">Place an Order</h1>

        <p className="mt-3 max-w-3xl text-slate-700">
          Use this secure Stripe checkout page to pay for Amazon seller account reinstatement support. Choose the package
          that fits your issue (Section 3 suspension, linked accounts, video verification, IP complaints, invoice review).
          After payment, complete intake so I can review your suspension notice and documents.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={[
                "rounded-3xl border p-6 shadow-sm bg-white/80 backdrop-blur",
                p.featured ? "border-amber-400/60" : "border-slate-200",
              ].join(" ")}
            >
              {p.featured && (
                <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                  Most popular
                </div>
              )}

              <h2 className="mt-3 text-lg font-semibold text-slate-900">{p.name}</h2>
              <p className="mt-1 text-sm font-semibold text-slate-700">{p.priceLabel}</p>
              <p className="mt-3 text-sm text-slate-700">{p.desc}</p>

              {p.note && <p className="mt-3 text-xs text-slate-500">{p.note}</p>}

              <button
                type="button"
                onClick={() => {
                  window.location.href = p.payLink;
                }}
                className="mt-6 inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
              >
                Pay Now (Stripe)
              </button>

              <div className="mt-4 h-px w-full bg-slate-100" />

              <p className="mt-3 text-xs text-slate-500">
                Prefer Fiverr checkout?{" "}
                <a className="underline" href={fiverrLink} target="_blank" rel="noreferrer">
                  Order on Fiverr
                </a>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
          <h3 className="text-base font-semibold">Next step: Submit your case details</h3>
          <p className="mt-2 text-sm text-slate-700">
            After payment (or before), complete the intake form so I can review your suspension notice, marketplace,
            and documents.
          </p>
          <a
            href="/intake"
            className="mt-4 inline-flex rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            Start Case Intake
          </a>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}