import { useState } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import topTexture from "../img/barra_bco.png";

import foto1 from "../img/foto1.jpeg"
import foto2 from "../img/foto2.jpeg";
import foto3 from "../img/foto3.jpeg";
import foto4 from "../img/foto4.jpeg";
import foto5 from "../img/foto5.jpeg";
import foto6 from "../img/foto6.jpeg";
import foto9 from "../img/foto9.jpeg";
import foto10 from "../img/10.jpeg";
import foto11 from "../img/11.jpeg";
import foto13 from "../img/13.jpeg";
import foto14 from "../img/4.jpeg";
import foto15 from "../img/15.jpeg";
import foto16 from "../img/16.jpeg";
import foto17 from "../img/17.jpeg";

const Carousel = () => {
  const slides = [
    { url: foto1 },
    { url: foto2 },
    { url: foto3 },
    { url: foto4 },
    { url: foto5 },
    { url: foto6 },
    { url: foto9 },
    { url: foto10 },
    { url: foto11 },
    { url: foto13 },
    { url: foto14 },
    { url: foto15 },
    { url: foto16 },
    { url: foto17 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="section galeria" id="galeria">
      <div className="texture h-7 mt-[-20px]" style={{ backgroundImage: `url(${topTexture})` }}></div>
      <section className="carousel">
        <div className="max-w-[1400px] w-full m-auto py-16 px-4 relative group text-center">
          <h1 className="text-center font-bold text-[22px] mb-5">GALERIA</h1>
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
              backgroundSize: "cover",   // Pode ser "contain" para ajustar a imagem sem cortar
              backgroundPosition: "center",
              width: "100%",   // Ajuste conforme necessário
              height: "500px",  // Altura fixa para o carrossel
            }}
            className="relative rounded-2xl bg-center duration-500"
          ></div>
          {/* left arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* right arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex justify-center py-4">
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="hover:text-orange-500 text-[#1a99d2]"
              >
                <RxDotFilled size={22} className="cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
