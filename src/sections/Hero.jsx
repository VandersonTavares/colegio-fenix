import Banner from "../img/banner-1.png";

// 

const Hero = () => {
  return (
    <div className="hero h-[400px] mb-5" style={{backgroundImage: `url(${Banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionY: "center"}}>
      <div className="container mx-auto max-w-6xl h-[400px] flex flex-col-reverse">
        <p className="text-white mt-[-15px] font-bold">Ligue e escolha um de nossos planos.</p>
        <h1 className="text-white text-[44px] font-bold">Invista em seu futuro!</h1>
      </div>
    </div>
  );
};

export default Hero;
