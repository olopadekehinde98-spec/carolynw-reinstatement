import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Amazon Account Reinstatement Service | Appeals, POA, Verification Help",
  description:
    "Amazon account reinstatement support for suspended or deactivated seller accounts. Evidence-based guidance for appeals, POA structure, video verification, linked accounts, and invoice/authenticity issues.",
};

export default function AmazonReinstatementPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-12 pb-14">
        <div className="max-w-5xl">
          <h1 className="text-3xl font-bold tracking-tight">
            Amazon Account Reinstatement Support
          </h1>

          <p className="mt-3 text-slate-700">
            If your Amazon seller account is suspended or deactivated, reinstatement usually depends on two things:
            <span className="font-semibold"> (1) clear root cause</span> and
            <span className="font-semibold"> (2) strong evidence</span>. This page explains how the process works and
            how to prepare a compliant appeal. Amazon makes the final decision, and outcomes are not guaranteed.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold">Common reinstatement cases</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Amazon Section 3 suspension (policy violation)</li>
                <li>Related / linked account suspensions</li>
                <li>Video verification support</li>
                <li>Invoice / authenticity complaints</li>
                <li>IP complaints (trademark/copyright)</li>
                <li>Listing / ASIN compliance issues</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold">What you get</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Suspension notice analysis + risk factors</li>
                <li>Evidence mapping (claim → document)</li>
                <li>Corrective actions + prevention steps</li>
                <li>POA structure + submission guidance</li>
              </ul>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Compliance note</p>
                <p className="mt-1">
                  No fake invoices or documents. Guidance is based on real evidence and policy-aligned steps.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">How the reinstatement workflow works</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
              <li>Submit your suspension notice + marketplace.</li>
              <li>We identify the true issue and weak points in evidence.</li>
              <li>We map each claim to documents you actually have.</li>
              <li>We build corrective actions + prevention controls.</li>
              <li>You submit a clean, consistent appeal (POA structure).</li>
            </ol>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/intake"
                className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
              >
                Start Case Intake
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                View Services
              </Link>
              <Link
                href="/order"
                className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Place an Order
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">FAQ</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <p>
                <span className="font-semibold">Do you guarantee reinstatement?</span> No. Amazon decides outcomes.
                The goal is to improve clarity, compliance, and evidence quality.
              </p>
              <p>
                <span className="font-semibold">Do you provide invoices/documents?</span> No. We work only with real
                evidence.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}