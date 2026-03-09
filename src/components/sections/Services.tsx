import { CheckCircle, Code } from "lucide-react";

const offers = [
  "Responsive design",
  "Cross-browser compatibility",
  "Clean and efficient code",
  "Good communication skills",
  "Strong problem-solving skills",
];

export default function Services() {
  return (
    <section id="services" className="px-4 py-20 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-4xl font-bold">Services</h2>
        <p className="mb-12 text-center text-violet-200/80">What I offer</p>

        <div className="rounded-2xl border border-white/20 bg-black/55 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
          <div className="mb-6 flex items-center space-x-4">
            <Code className="text-violet-300" size={30} />
            <h3 className="text-2xl font-semibold text-white">Frontend Developer</h3>
          </div>

          <ul className="space-y-4">
            {offers.map((service) => (
              <li key={service} className="flex items-center space-x-3 text-slate-200">
                <CheckCircle className="shrink-0 text-violet-300" size={20} />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
