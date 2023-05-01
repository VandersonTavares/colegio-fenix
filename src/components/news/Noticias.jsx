// import NewsImg from "../../img/IMAGEM-220x120.png";
import TextureTop from "../../img/barra_bco.png";

const Noticias = () => {
    return (
        <>
        <div className="texture-top h-5" style={{backgroundImage: `url(${TextureTop})`}}></div>
            <section className="noticias">
                <div className="container mx-auto max-w-6xl border h-[500px] mt-6">
                   <h1>Noticias</h1>
                </div>
            </section>
        </>
    )
}

export default Noticias