import "./App.css";

import ButtonToTop from "../src/components/ButtonToTop";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Diferenciais from "./sections/Diferenciais";
import Hero from "./sections/Hero";
import Carousel from "./sections/Carousel";
import Noticias from "./sections/Noticias";
import Cursos from "./sections/Cursos";
import Valores from "./sections/Valores";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content min-h-screen">
        <Hero />
        <Cursos />
        <Valores />
        <Diferenciais />
        <Carousel />
        <Noticias />
        <ButtonToTop/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
