import Card from "../components/Card";
const Valores = () => {

    const precos = [
        {dias: '1', investimento: '290', descPontualidade: '10', mensalidade: '280', promoInvestimento: '140', promoMensalidade: '130'},
        {dias: '2', investimento: '360', descPontualidade: '10', mensalidade: '350', promoInvestimento: '180', promoMensalidade: '170'},
        {dias: '3', investimento: '420', descPontualidade: '10', mensalidade: '410', promoInvestimento: '210', promoMensalidade: '200'}
    ];
    
    return (
        <section className='valores pt-2 border-t-4 mt-8' id="nossos-planos">
            <div className="container mx-auto max-w-6xl">
                <div className="box">
                    <h1 className="text-center text-2xl">Nossos Planos</h1>
                    <Card precos={precos}/>
                </div>
            </div>
        </section>
    )
}

export default Valores