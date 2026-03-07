import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Amazon Section 3 Suspension Appeal Help | Plan of Action (POA) Support",
  description:
    "Section 3 Amazon suspension appeal guidance. Evidence mapping, corrective actions, prevention controls, and POA structure to help you submit a compliant reinstatement appeal.",
};

export default function Section3Page() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-12 pb-14">
        <div className="max-w-5xl">
          <h1 className="text-3xl font-bold tracking-tight">
            Amazon Section 3 Suspension — Appeal & POA Support
          </h1>

          <p className="mt-3 text-slate-700">
            A Section 3 suspension usually means Amazon believes your account has a serious compliance issue.
            A strong appeal typically includes: a clear root cause, corrective actions already taken, prevention controls,
            and supporting evidence. This page explains what to prepare and how to structure your response.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold">What Amazon typically looks for</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Clear explanation of what caused the issue (root cause)</li>
                <li>Corrective actions you already took</li>
                <li>Prevention steps to stop it happening again</li>
                <li>Evidence that supports each statement</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold">Examples of Section 3 triggers</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Policy violations / restricted products</li>
                <li>Account health escalations / performance issues</li>
                <li>Order defect rate (ODR) or customer complaints</li>
                <li>Drop shipping / sourcing concerns</li>
                <li>Listing compliance problems</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Your exact notice matters. Always use the precise wording Amazon provided.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">POA structure (simple and effective)</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
              <li><span className="font-semibold">Root Cause:</span> What happened (specific, honest, no excuses).</li>
              <li><span className="font-semibold">Corrective Actions:</span> What you fixed immediately.</li>
              <li><span className="font-semibold">Prevention:</span> What systems you added to prevent repeat issues.</li>
              <li><span className="font-semibold">Evidence:</span> Documents that support each claim.</li>
            </ol>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Compliance note</p>
              <p className="mt-1">
                No fake invoices or documents. We only work with real evidence and policy-aligned steps.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/intake?issue=Section%203%20Suspension"
                className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
              >
                Start Section 3 Intake
              </Link>
              <Link
                href="/order"
                className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Place an Order
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">FAQ</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <p>
                <span className="font-semibold">Can you guarantee reinstatement?</span> No. Amazon decides outcomes.
                Our goal is to improve compliance, clarity, and evidence strength.
              </p>
              <p>
                <span className="font-semibold">Do you provide invoices?</span> No. We do not create fake documents.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}