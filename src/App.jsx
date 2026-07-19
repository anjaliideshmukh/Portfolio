import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/about";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <>

      <Sidebar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
