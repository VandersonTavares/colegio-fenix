import PropTypes from 'prop-types';

const Card = ({ precos }) => {
   
    return (
        <div className="card mb-10 mt-10">
            <div className="item-box flex justify-center flex-wrap gap-4">
                {precos.map((item, i) => (
                    <div key={i} className="rounded-3xl p-4 h-[380px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <h1 className="text-[22px] font-medium text-center">{i > 0 ? <span>{item.dias} Dias</span> : <span>{item.dias} Dia</span>} | 2 Horas/<span className='text-sm font-semibold'>dia</span></h1>
                        <div className="day mt-4 pb-4 border-b-4">
                            <h3 className="text-xl font-semibold bg-cyan-700 text-white text-center mb-2">1 Curso</h3>
                            <p>Investimento Mensal: <span className="font-semibold">R$ {item.investimento},00</span></p>
                            <p>Desconto de Pontualidade: <span className="font-semibold">R$ {item.descPontualidade},00</span></p>
                            <p className='text-center mt-3'>Mensalidade: <span className="font-semibold">R$ {item.mensalidade},00</span></p>
                        </div>
                        <div className="moreDays mt-4">
                            <h1 className="text-center font-semibold text-xl mb-2 bg-cyan-700 text-white">50% de Desconto</h1>
                            <div>
                                <p><span className="font-semibold">Pacote (2 ou Mais Cursos)</span></p>
                                <p>Investimento Mensal: <span className="font-semibold">R$ {item.promoInvestimento},00</span></p>
                                <p>Desconto de Pontualidade: <span className="font-semibold">R$ {item.descPontualidade},00</span></p>
                                <p className="text-center mt-3">Mensalidade: <span className="font-semibold">R$ {item.promoMensalidade},00</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

Card.propTypes = {
    precos: PropTypes.array
}


export default Card
