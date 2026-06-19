import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import MyJourney from "./components/MyJourney";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <>
    <Background/>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience/>
      <MyJourney/>
      <Footer />
    </>
  );
}

export default App;