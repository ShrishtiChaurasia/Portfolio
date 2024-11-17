import "./App.css";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Project from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
