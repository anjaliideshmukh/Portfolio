import NavBar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/about";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Skills from "./components/Skills/skills";
import Experience from "./components/Experience/experience";
import Certifications from "./components/Certifications/Certifications";

function App() {
  return (
    <>

      <NavBar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Experience/>
      <Certifications/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
