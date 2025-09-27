import Container from "@/components/Container";
import { notFound } from "next/navigation";
import { projectsWithPhotos } from "@/data/projects";
import Link from "next/link";
import ProjectHero from "@/components/ProjectHero";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  return projectsWithPhotos.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: string } }) {
  const [tDetail, tProjects] = await Promise.all([
    getTranslations("projects_detail"),
    getTranslations("projects"),
  ]);
  const p = projectsWithPhotos.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const projectContent = (tProjects.raw("items") as Record<string, { title: string; desc: string }>)[p.slug] ?? {
    title: p.slug,
    desc: "",
  };

  // hero için görseller: cover + gallery
  const heroImages = [p.cover, ...(p.gallery ?? [])];

  // galeri: cover ilk sırada, diğerleri tekrar etmeyecek şekilde
  const rest = (p.gallery ?? []).filter((src) => src !== p.cover);
  const allGallery = [p.cover, ...rest];

  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Breadcrumbs */}
        <div className="text-xs text-neutral-600">
          <Link href="/projeler" className="hover:text-[var(--brand)]">
            {tDetail("breadcrumbs.projects")}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-800">{projectContent.title}</span>
        </div>

        {/* Başlık */}
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold border-l-4 border-[var(--brand)] pl-3">
          {projectContent.title}
        </h1>
        <p className="mt-2 text-neutral-700 text-[15px]">{projectContent.desc}</p>

        {/* HERO SLIDER */}
        <div className="mt-6">
          <ProjectHero title={projectContent.title} images={heroImages} />
        </div>

        {/* Kare galeri */}
        {allGallery.length > 0 && (
          <>
            <h2 className="mt-8 font-medium text-lg">{tDetail("gallery_title")}</h2>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allGallery.map((src, i) => (
                <a
                  key={i}
                  href={src}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl overflow-hidden border border-neutral-200 bg-white/90 hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full" style={{ paddingTop: "100%" }}>
                    <Image
                      src={src}
                      alt={`${projectContent.title} - ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        {/* Geri */}
        <div className="mt-10">
          <Link href="/projeler" className="text-sm hover:text-[var(--brand)]">
            ← {tDetail("back")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
