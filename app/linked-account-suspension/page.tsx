import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Amazon Linked Account Suspension Help | Related Account Reinstatement",
  description:
    "Help for Amazon seller accounts suspended for being linked/related to another account. Evidence-based guidance to explain ownership, access, and prevent future linkage flags.",
};

export default function LinkedAccountSuspensionPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-12 pb-14">
        <div className="max-w-5xl">
          <h1 className="text-3xl font-bold tracking-tight">
            Amazon Linked / Related Account Suspension — Help & Guidance
          </h1>

          <p className="mt-3 text-slate-700">
            If Amazon says your account is related/linked to another seller account, reinstatement often depends on
            proving account ownership and explaining any possible connections (authorized or unauthorized). This page
            outlines what to check and what evidence to prepare.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold">Common linkage triggers</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Shared Wi-Fi or shared internet location (home/office/warehouse)</li>
                <li>VPN usage or shared device/browser profiles</li>
                <li>Someone else logged in (VA/agency/family/employee)</li>
                <li>Shared business details (address, phone, tax info, bank)</li>
                <li>Account compromise (unauthorized access)</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Always use the exact wording from the suspension notice.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold">What you should prepare</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Account ownership explanation (who created, who accessed)</li>
                <li>Device + network clarification (where you log in, VPN status)</li>
                <li>Business documents used during registration</li>
                <li>Security actions taken (password reset, 2FA, device checks)</li>
                <li>Evidence list (ID, bank/utility, business docs, etc.)</li>
              </ul>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Compliance note</p>
                <p className="mt-1">
                  No fake documents. Guidance is based on real evidence and policy-aligned explanations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">How we approach linked account cases</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
              <li>Review the suspension notice + any prior appeal responses.</li>
              <li>Identify likely linkage points (network, device, people, entities).</li>
              <li>Prepare a clean narrative: ownership, access, and relationships.</li>
              <li>Attach supporting proof and remove weak/contradictory claims.</li>
              <li>Submit a compliant, consistent response through Account Health.</li>
            </ol>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/intake?issue=Related%20%2F%20Linked%20Account"
                className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
              >
                Start Linked Account Intake
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
                <span className="font-semibold">Should I create a new seller account?</span> No. Creating a new account
                can make reinstatement harder.
              </p>
              <p>
                <span className="font-semibold">Do you guarantee reinstatement?</span> No. Amazon decides outcomes.
                The goal is stronger, evidence-based clarity and compliance.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}