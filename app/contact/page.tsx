import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import Link from "next/link";

const EMAIL = "carolynwilson1645@gmail.com";
const FIVERR = "https://www.fiverr.com/s/e6ajg6g";
const WHATSAPP_LINK =
  "https://wa.me/15014770429?text=Hello%20Carolyn%2C%20I%20need%20help%20with%20Amazon%20account%20reinstatement.";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-12 pb-14">
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="mt-3 max-w-2xl text-slate-700">
          Fastest way: start intake so I can review your notice and advise the next steps.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {/* Start intake card */}
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">Start Intake</h2>
            <p className="mt-2 text-sm text-slate-700">
              Submit your issue details and suspension notice so I can route your case correctly.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/intake"
                className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
              >
                Start Case Intake
              </Link>

              <Link
                href="/order"
                className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Place an Order
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Support hours</p>
              <p className="mt-1">Mon–Sat</p>
              <p className="mt-1">Typical response: within 24–48 hours</p>
              <p className="mt-2 text-xs text-slate-500">
                (Response time depends on case complexity and document readiness.)
              </p>
            </div>
          </div>

          {/* Direct contact card */}
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">Direct Contact</h2>

            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                <a className="underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </p>

              <p>
                <span className="font-semibold text-slate-900">Fiverr:</span>{" "}
                <a className="underline" href={FIVERR} target="_blank" rel="noreferrer">
                  Order / message on Fiverr
                </a>
              </p>

              <p>
                <span className="font-semibold text-slate-900">WhatsApp:</span>{" "}
                <a className="underline" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">What to send</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Marketplace (US/UK/EU/etc.)</li>
                <li>Full suspension notice text</li>
                <li>What you submitted already (if any)</li>
                <li>Documents available (ID, invoices, bank/utility, etc.)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
          <h2 className="text-lg font-semibold">Important</h2>
          <p className="mt-2 text-sm text-slate-700">
            I do not create or provide fake invoices, letters, or documents. Guidance is based on real evidence and
            policy-aligned steps.
          </p>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}