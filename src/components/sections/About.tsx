import { Download } from "lucide-react";
import { projects } from "../../data/project";

const EXPERIENCE_START_YEAR = 2025;

const About = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = Math.max(1, currentYear - EXPERIENCE_START_YEAR + 1);
  const projectsCompleted = projects.length;

  return (
    <section id="about" className="px-4 py-20 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-4xl font-bold">About Me</h2>
        <p className="mb-10 text-violet-200/80">Introduction</p>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-200">
          A frontend developer who has recently graduated from a prestigious
          university. I have a keen eye for detail and a strong passion for
          creating visually appealing and user-friendly interfaces. I am eager
          to learn and adapt to new technologies to stay current in the
          ever-evolving field of web development.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/15 p-6">
            <h3 className="text-3xl font-bold text-violet-300">{yearsOfExperience}+</h3>
            <p className="text-sm text-slate-300">Years Experience</p>
          </div>

          <div className="rounded-2xl border border-white/15 p-6">
            <h3 className="text-3xl font-bold text-violet-300">{projectsCompleted}+</h3>
            <p className="text-sm text-slate-300">Projects Completed</p>
          </div>
        </div>

        <a
          href="/ADELEKE_YUSUF_ADEYEMI_FRONTEND_CV.pdf"
          download
          className="mx-auto mt-10 inline-flex items-center space-x-2 rounded-full bg-violet-500 px-6 py-3 text-white transition-colors hover:bg-violet-400"
        >
          <span>Download CV</span>
          <Download size={18} />
        </a>
      </div>
    </section>
  );
};

export default About;
