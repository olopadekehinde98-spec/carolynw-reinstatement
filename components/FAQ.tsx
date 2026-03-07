const faqs = [
  {
    q: "Do you guarantee reinstatement?",
    a: "No. Amazon decisions vary. I provide evidence-based guidance and drafting support to improve clarity and compliance.",
  },
  {
    q: "Do you provide invoices or documents?",
    a: "No. I do not create or provide fake invoices, letters, or documents. We work only with real evidence.",
  },
  {
    q: "What do you need from me?",
    a: "Your suspension notice, marketplace, what you submitted already, and the documents you have (ID, invoices, LOA, etc.).",
  },
  {
    q: "Can you help with video verification?",
    a: "Yes. We’ll review failure points and prepare the correct identity/business proof and call readiness steps.",
  },
];

export default function FAQ() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">FAQ</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {faqs.map((f) => (
          <div
            key={f.q}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="font-semibold">{f.q}</p>
            <p className="mt-2 text-sm text-slate-700">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}