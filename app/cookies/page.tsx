import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export default function CookiesPage() {
  return (
    <main>
      <SiteHeader />
      <Section className="pt-12 pb-14">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight">Cookie Notice</h1>

          <div className="mt-6 space-y-4 text-sm text-slate-700">
            <p>
              This website uses cookies and similar technologies to improve performance and understand website traffic.
            </p>

            <p>
              We use Google Analytics to measure site usage (for example: page views and basic interactions). Analytics
              helps us improve the website experience.
            </p>

            <p>
              You can control cookies through your browser settings. Disabling cookies may affect some site features.
            </p>

            <p className="text-xs text-slate-500">
              Note: This site does not sell personal data. For more information, see the Privacy Policy.
            </p>
          </div>
        </div>
      </Section>
      <SiteFooter />
    </main>
  );
}