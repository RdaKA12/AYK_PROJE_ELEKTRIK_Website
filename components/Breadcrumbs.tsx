import { Link } from "@/lib/i18n/routing";

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="text-sm text-neutral-500 mb-4">
      {items.map((it, i) => (
        <span key={i}>
          {it.href ? <Link href={it.href} className="hover:text-neutral-800">{it.label}</Link> : <span className="text-neutral-800">{it.label}</span>}
          {i < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
}
