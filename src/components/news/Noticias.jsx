// import NewsImg from "../../img/IMAGEM-220x120.png";
import TextureTop from "../../img/barra_bco.png";

const Noticias = () => {
    return (
        <>
        <div className="texture-top h-5" style={{backgroundImage: `url(${TextureTop})`}}></div>
            <section className="noticias">
                <div className="container">
                   <h1>Noticias</h1>
                </div>
            </section>
        </>
    )
}

export default Noticias