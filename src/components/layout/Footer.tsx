import { Github, Linkedin, Twitter } from "lucide-react";
import { useUI } from "../../context/UIProvider";

export default function Footer() {
  const { scrollToSection } = useUI();
  return (
    <>
      <footer className="bg-black text-white py-12 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Adeleke</h3>
              <p className="text-indigo-200">Frontend Engineer</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-indigo-200 transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="hover:text-indigo-200 transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("education")}
                    className="hover:text-indigo-200 transition-colors"
                  >
                    Education
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-indigo-200 transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-indigo-200 transition-colors"
                  >
                    About
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/adelekeyemii?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-200 transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/adeleke-yusuf-35a569169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-200 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/YUpappi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-200 transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-indigo-500 pt-8 text-center text-indigo-200">
            <p>
              &copy; {new Date().getFullYear()} Adeleke Yusuf. All rights
              reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
