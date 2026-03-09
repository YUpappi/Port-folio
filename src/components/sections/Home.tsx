import { Github, Linkedin, Mail, Sparkles, Code2, Zap } from "lucide-react";
import { useUI } from "../../context/UIProvider";

const positions = ["Frontend Engineer"];

const Home = () => {
  const { scrollToSection } = useUI();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-14 pt-28 text-white"
    >
      <div className="absolute left-10 top-36 hidden rounded-full bg-violet-500/90 p-3 shadow-[0_0_30px_rgba(168,85,247,0.8)] md:block">
        <Code2 size={20} />
      </div>
      <div className="absolute right-10 top-40 hidden rounded-full bg-violet-500/90 p-3 shadow-[0_0_30px_rgba(168,85,247,0.8)] md:block">
        <Sparkles size={20} />
      </div>
      <div className="absolute bottom-24 right-1/4 hidden rounded-full bg-violet-500/80 p-2 shadow-[0_0_30px_rgba(168,85,247,0.7)] md:block">
        <Zap size={16} />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl rounded-4xl border border-white/10 bg-black/35 px-6 py-10 text-center shadow-[0_0_80px_rgba(255,255,255,0.08)] backdrop-blur-sm md:px-10 md:py-14">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.42em] text-violet-300">
            Adeleke Yusuf
          </p>

          <h1 className="text-5xl font-semibold leading-[0.95] text-white sm:text-6xl md:text-7xl">
            We Build
            <br />
            Great Products
          </h1>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.8)]">
              Position
            </span>
            <span className="text-slate-300">for collaboration</span>
          </div>

          <ul className="mx-auto mt-5 max-w-md space-y-2 text-left text-xl text-slate-100 sm:text-2xl">
            {positions.map((position) => (
              <li key={position} className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
                <span>{position}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-violet-300/80 bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              Contact Me
              <Mail size={16} />
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Projects
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-5">
            <a
              href="https://github.com/YUpappi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 transition hover:text-violet-300"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/adeleke-yusuf-35a569169"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 transition hover:text-violet-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
