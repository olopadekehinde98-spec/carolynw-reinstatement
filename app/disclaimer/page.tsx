import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export default function DisclaimerPage() {
  return (
    <main>
      <SiteHeader />
      <Section className="pt-12 pb-14">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight">Disclaimer</h1>

          <div className="mt-6 space-y-4 text-sm text-slate-700">
            <p>
              Carolyn W Reinstatement is an independent service provider and is not affiliated with Amazon, Amazon.com,
              or any Amazon subsidiary.
            </p>

            <p>
              Guidance is provided for informational and support purposes and does not guarantee reinstatement or any
              specific outcome. Final decisions are made solely by Amazon.
            </p>

            <p>
              We do not create or provide fake invoices, forged documents, or any deceptive materials. Services are
              based on real evidence and compliance-focused guidance.
            </p>

            <p>You are responsible for the accuracy of all information and documents you submit to Amazon.</p>
          </div>
        </div>
      </Section>
      <SiteFooter />
    </main>
  );
}