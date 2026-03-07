import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export default function SuccessPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-12 pb-14">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight">Payment Successful ✅</h1>
          <p className="mt-3 text-slate-700">
            Thank you! To start working on your case, please complete the intake form now.
          </p>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">Next steps (important)</h2>

            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
              <li>Open the intake form and submit your marketplace + suspension notice.</li>
              <li>List what you already submitted to Amazon (if anything).</li>
              <li>List documents you have (ID, invoices, bank/utility, business docs).</li>
              <li>If you have files, include a Google Drive/Dropbox link inside the form response.</li>
            </ol>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/intake"
                className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
              >
                Complete Intake Now
              </Link>

              <Link
                href="/services"
                className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                View Services
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Contact
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Tip: If you already submitted intake, you can just contact me with your order email and marketplace.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-semibold text-slate-900">Compliance note</p>
            <p className="mt-2 text-sm text-slate-700">
              I do not create or provide fake invoices, letters, or documents. Guidance is based on real evidence.
            </p>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}