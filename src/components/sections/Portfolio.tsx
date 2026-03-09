import { projects } from "../../data/project";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-4xl font-bold">Portfolio</h2>
        <p className="mb-12 text-center text-violet-200/80">
          Scroll to see projects stack at the top
        </p>

        <div className="relative">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="mb-8 sticky"
              style={{
                zIndex: index + 1,
                top: `${96 + index * 16}px`,
              }}
            >
              <div className="mx-auto max-w-2xl rounded-xl border border-white/20 bg-black/70 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full rounded-lg object-cover"
                />

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs uppercase tracking-[0.15em] text-violet-200/80">
                    Tools
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-violet-300/30 px-2.5 py-1 text-[11px] text-violet-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet-300/40 px-4 py-1.5 text-xs text-violet-200 transition hover:bg-violet-500/20"
                  >
                    Visit
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
