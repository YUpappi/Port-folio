import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Home from "./components/sections/Home";
import Portfolio from "./components/sections/Portfolio";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import { ThemeProvider } from "./context/ThemeProvider";
import { UIProvider } from "./context/UIProvider";

const App = () => {
  return (
    <ThemeProvider>
      <UIProvider>
        <div className="min-h-screen">
          <Header />
          <main className="pt-8">
            <Home />
            <About />
            <Education />
            <Skills />
            <Services />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      </UIProvider>
    </ThemeProvider>
  );
};

export default App;
