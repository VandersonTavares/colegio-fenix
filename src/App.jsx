import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Diferenciais from "./components/differentials/Diferenciais";
import Hero from "./components/hero/Hero";
import Carousel from "./components/carousel/Carousel";
import Noticias from "./components/news/Noticias";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content min-h-screen">
        <Hero />
        <Diferenciais />
        <Carousel />
        <Noticias />
      </div>
      <Footer />
    </div>
  );
}

export default App;
