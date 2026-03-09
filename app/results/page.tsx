import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

type CaseItem = {
  title: string;
  issue: string;
  whatWeDid: string[];
  note: string;
};

const cases: CaseItem[] = [
  {
    title: "Section 3 Suspension — Evidence Mapping + POA Structure",
    issue: "Account deactivated for policy compliance concerns (Section 3).",
    whatWeDid: [
      "Reviewed the suspension notice and risk factors",
      "Created an evidence map (claims → documents)",
      "Outlined corrective actions and prevention controls",
      "Provided submission-ready structure and messaging guidance",
    ],
    note: "Outcome varies by Amazon review. This describes the process, not a guarantee.",
  },
  {
    title: "Related / Linked Account — Relationship Clarification",
    issue: "Account flagged as related to another seller account.",
    whatWeDid: [
      "Mapped possible linkage points (access, networks, devices, shared entities)",
      "Identified missing proof and recommended documentation",
      "Guided a clean narrative to clarify account ownership and access",
      "Prepared the account history explanation and evidence list",
    ],
    note: "Amazon may request additional documents. Results depend on their investigation.",
  },
  {
    title: "Video Verification — Prep + Document Readiness",
    issue: "Seller unable to pass video verification or verification failed.",
    whatWeDid: [
      "Document checklist (ID + bank/utility + business docs if applicable)",
      "Call readiness steps (lighting, camera, matching names/addresses)",
      "Common failure fixes (mismatch, formatting, unsupported documents)",
      "Submission guidance after the call (what to upload and how to explain)",
    ],
    note: "Video verification outcomes vary. Preparation improves clarity and compliance.",
  },
];

export default function ResultsPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-12 pb-14">
        <div className="max-w-5xl">
          <h1 className="text-3xl font-bold tracking-tight">Case Studies & Results</h1>

          <p className="mt-3 text-slate-700">
            These examples show what the workflow looks like (diagnosis → evidence mapping → policy-aligned strategy).
            Outcomes vary and are not guaranteed because Amazon makes the final decision.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {cases.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
              >
                <h2 className="text-base font-semibold text-slate-900">{c.title}</h2>
                <p className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold">Issue:</span> {c.issue}
                </p>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-slate-900">What was done</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {c.whatWeDid.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <p className="mt-4 text-xs text-slate-600">{c.note}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href="/intake"
                    className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm hover:opacity-95"
                  >
                    Start Intake
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">Want a recommendation?</h2>
            <p className="mt-2 text-sm text-slate-700">
              Submit your suspension notice and marketplace, and I’ll tell you the exact documents to prepare and the best
              path forward.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/intake"
                className="rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
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
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}