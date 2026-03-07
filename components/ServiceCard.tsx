import Link from "next/link";

type Props = {
  title: string;
  desc: string;
  href?: string;
};

export default function ServiceCard({ title, desc, href = "/intake" }: Props) {
  return (
    <Link
      href={href}
      className="group block rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur hover:shadow-md transition"
    >
      <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-600" />
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>
      <div className="mt-4 h-px w-full bg-slate-100" />
      <p className="mt-3 text-xs font-semibold text-blue-900">Start this service →</p>
    </Link>
  );
}