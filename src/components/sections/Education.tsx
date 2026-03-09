import { GraduationCap, Award, Briefcase } from "lucide-react";

const educationItems = [
  {
    title: "B.Eng Mechanical Engineering",
    meta: "2020",
    description: "Completed undergraduate degree in Mechanical Engineering.",
    icon: GraduationCap,
  },
  {
    title: "Frontend Developer Certification",
    meta: "Vephla Institute - 2024",
    description:
      "Professional frontend development certification from Vephla Institute.",
    icon: Award,
  },
  {
    title: "Frontend Intern",
    meta: "HNG Internship - Feb 2025 to Apr 2025",
    description:
      "Completed frontend internship focused on practical product development and collaboration.",
    icon: Briefcase,
  },
];

export default function Education() {
  return (
    <section id="education" className="px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-4xl font-bold">Education</h2>
        <p className="mb-12 text-center text-violet-200/80">
          Academic and professional journey
        </p>

        <div className="space-y-6">
          {educationItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/20 bg-black/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-violet-500/20 p-3 text-violet-300">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-violet-200">{item.meta}</p>
                    <p className="mt-3 text-slate-300">{item.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
