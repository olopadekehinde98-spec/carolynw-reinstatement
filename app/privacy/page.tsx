import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <Section className="pt-12 pb-14">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <div className="mt-6 space-y-4 text-sm text-slate-700 max-w-3xl">
          <p>
            This site collects information you submit through the intake form (such as name, email, and case details)
            for the purpose of responding to your request and providing service guidance.
          </p>
          <p>
            Do not submit sensitive personal data you do not want shared. If you share documents via a cloud link,
            ensure access settings are appropriate.
          </p>
          <p>This website is not affiliated with Amazon. No outcome is guaranteed.</p>
        </div>
      </Section>
      <SiteFooter />
    </main>
  );
}