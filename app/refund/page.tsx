import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export default function RefundPolicyPage() {
  return (
    <main>
      <SiteHeader />
      <Section className="pt-12 pb-14">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight">Refund Policy</h1>

          <p className="mt-4 text-sm text-slate-700">
            This Refund Policy applies to services purchased through this website (including Stripe payments).
            Because this is a professional service, refunds are based on work status rather than outcome.
          </p>

          <div className="mt-8 space-y-6 text-sm text-slate-700">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">1) No Guarantee</h2>
              <p className="mt-2">
                Amazon decisions vary and are controlled by Amazon. Payment covers guidance, analysis, and drafting
                support. Refunds are not provided based solely on Amazon’s final decision.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">2) Starter Review (€9)</h2>
              <p className="mt-2">
                Refundable only if you cancel before the review begins. Once analysis starts, the fee becomes
                non-refundable.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">3) Deposits (Action Plan / Full Support)</h2>
              <p className="mt-2">
                Deposits reserve time and begin the service workflow. Deposits are refundable only if you cancel before
                work begins. Once work begins (reviewing evidence, strategy mapping, drafting, or revisions), the
                deposit is non-refundable.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">4) If You Stop Responding</h2>
              <p className="mt-2">
                If you do not provide required information/documents or stop responding for 14 days, the project may be
                closed as incomplete. Refund eligibility depends on work already completed.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">5) Chargebacks</h2>
              <p className="mt-2">
                Please contact us first to resolve issues. Unapproved chargebacks may result in blocking future access.
                Evidence of work delivered may be provided to the payment processor.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">6) How to Request a Refund</h2>
              <p className="mt-2">
                Email{" "}
                <a className="underline" href="mailto:carolynwilson1645@gmail.com">
                  carolynwilson1645@gmail.com
                </a>{" "}
                with your order email, purchase date, and reason. If eligible, refunds are processed back to the
                original payment method.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Important</p>
              <p className="mt-2">
                No refunds are provided based solely on Amazon’s final decision. Amazon is a third party and controls
                reinstatement outcomes.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <SiteFooter />
    </main>
  );
}