import { useState } from "react";
import type { ContactForm } from "../../types";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const RECEIVER_EMAIL = "adelekeadeyemi19@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.project}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${RECEIVER_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-4 py-20 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-4xl font-bold">Contact Me</h2>
        <p className="mb-12 text-center text-violet-200/80">Get in touch</p>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="mt-1 text-violet-300" size={24} />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Call Me</h3>
                <p className="text-slate-300">+243-906-400-5101</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="mt-1 text-violet-300" size={24} />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Email</h3>
                <a
                  href={`mailto:${RECEIVER_EMAIL}`}
                  className="text-slate-300 underline-offset-4 hover:text-violet-200 hover:underline"
                >
                  {RECEIVER_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="mt-1 text-violet-300" size={24} />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Location</h3>
                <p className="text-slate-300">Nigeria - Lagos state</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-2 outline-none transition focus:border-violet-300"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-2 outline-none transition focus:border-violet-300"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Project</label>
              <input
                type="text"
                name="project"
                value={formData.project}
                onChange={handleFormChange}
                required
                className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-2 outline-none transition focus:border-violet-300"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                required
                className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-2 outline-none transition focus:border-violet-300"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-white transition hover:bg-violet-400"
            >
              Send Email
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
