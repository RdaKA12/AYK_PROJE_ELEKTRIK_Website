import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  const title = p.title ?? p.slug;
  const desc = p.desc ?? "";
  return (
    <Link href={`/projeler/${p.slug}`} className="group rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 hover:border-[var(--brand)] transition-colors">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={p.cover} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-5">
        <h3 className="font-medium">{title}</h3>
        <p className="mt-1 text-sm text-neutral-600">{desc}</p>
      </div>
    </Link>
  );
}
