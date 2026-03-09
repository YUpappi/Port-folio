import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-4xl font-bold">Skills</h2>
        <p className="mb-12 text-center text-violet-200/80">My tools</p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 p-4"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-12 w-12 object-contain"
                loading="lazy"
              />
              <span className="text-sm font-medium text-slate-100">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
