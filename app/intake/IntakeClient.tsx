"use client";

import { useSearchParams } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

const GOOGLE_FORM_LINK = "https://forms.gle/9fpfBeEGH45HeGJb8";
const GOOGLE_FORM_EMBED =
  "https://docs.google.com/forms/d/e/1FAIpQLSdXHyESIx7gcJ156m-EXsDk5B3Cft4RRxa_7HjQz-Ta6BbCyw/viewform?embedded=true";

function normalizeIssue(issue: string) {
  const v = issue.trim().toLowerCase();
  if (!v) return "";

  if (v.includes("section 3")) return "Section 3 Suspension";
  if (v.includes("linked") || v.includes("related")) return "Related / Linked Account";
  if (v.includes("video")) return "Video Verification";
  if (v.includes("ip")) return "IP Complaint";
  if (v.includes("authentic") || v.includes("invoice")) return "Authenticity / Invoice";
  if (v.includes("asin") || v.includes("listing")) return "Listing / ASIN Issue";

  return issue;
}

function issueBlurb(issue: string) {
  switch (issue) {
    case "Section 3 Suspension":
      return "Paste the exact suspension notice, and tell me what actions you took already. We’ll map root cause + prevention controls.";
    case "Related / Linked Account":
      return "Tell me if anyone else accessed your account (VA/agency/family), any shared Wi-Fi/VPN, and what documents you used to register.";
    case "Video Verification":
      return "Tell me what error you see, which marketplace, and what documents you have ready (ID + bank/utility + business docs if applicable).";
    case "IP Complaint":
      return "Share the complaint type (trademark/copyright), ASIN(s), and whether you contacted the rights owner. We’ll plan compliant next steps.";
    case "Authenticity / Invoice":
      return "List your supplier, invoice details, and supporting proof (order confirmation, payment proof, delivery). No fake documents.";
    case "Listing / ASIN Issue":
      return "Share the exact error/case message and the ASIN(s). We’ll draft the correct request and evidence to resolve the conflict.";
    default:
      return "Fill the form with accurate details so I can guide you with the right evidence and next steps.";
  }
}

export default function IntakeClient() {
  const params = useSearchParams();
  const rawIssue = params.get("issue") || "";
  const issue = normalizeIssue(rawIssue);
  const blurb = issueBlurb(issue);

  return (
    <main>
      <SiteHeader />

      <Section className="pt-12 pb-14">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight">
            {issue ? `Start Case Intake — ${issue}` : "Start Case Intake"}
          </h1>

          <p className="mt-3 text-slate-700">
            {blurb} I do not create or support fake invoices/documents.
          </p>

          {issue ? (
            <div className="mt-6 rounded-3xl border border-amber-300/70 bg-amber-50 p-5">
              <p className="text-xs font-semibold text-amber-900">Selected issue</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{issue}</p>
              <p className="mt-2 text-xs text-slate-600">
                Please mention this same issue inside the Google form so your request is routed correctly.
              </p>
            </div>
          ) : null}

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">Fastest option</h2>
            <p className="mt-2 text-sm text-slate-700">
              Open the Google intake form and submit your suspension notice + marketplace + documents list.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
              >
                Open Google Intake Form
              </a>

              <a
                href="/order"
                className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Place an Order
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Tip: If you need to share files, add a Google Drive/Dropbox link inside the form response.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white/80 p-2 shadow-sm backdrop-blur">
            <iframe
              src={GOOGLE_FORM_EMBED}
              className="h-[1100px] w-full rounded-2xl"
              title="Case Intake Form"
            />
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-semibold text-slate-900">Compliance note</p>
            <p className="mt-2 text-sm text-slate-700">
              This service provides guidance and drafting support based on real evidence. I do not create
              or provide fake invoices, letters, or documents.
            </p>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}