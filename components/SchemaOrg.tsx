export default function SchemaOrg() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Carolyn W Reinstatement",
    url: "https://carolynreinstatement.netlify.app",
    description:
      "Amazon account reinstatement support: Section 3 suspensions, related/linked accounts, video verification, IP complaints, authenticity/invoice review, and appeal strategy.",
    areaServed: "Worldwide",
    knowsAbout: [
      "Amazon account reinstatement",
      "Section 3 suspension",
      "Related/linked account suspension",
      "Amazon video verification",
      "IP complaints",
      "Authenticity and invoice review",
      "Plan of Action (POA)",
    ],
    sameAs: ["https://www.fiverr.com/s/e6ajg6g"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "carolynwilson1645@gmail.com",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}