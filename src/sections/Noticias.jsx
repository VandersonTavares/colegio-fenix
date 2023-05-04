// import TextureTop from "../img/barra_bco.png";

const Noticias = () => {
  return (
    <section className="noticias text-center font-bold text-[22px] mt-20">
      <h1 className="text-center">ONDE ESTAMOS</h1>
      <div className="container mx-auto border mt-6">
        <div className="map flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d349.4759287051344!2d-48.193699717094255!3d-15.681698024809409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1683162776862!5m2!1spt-BR!2sbr"
            width="2200"
            height="400"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Noticias;
