import textureTop from '../../img/barra_azulc.png';

const Diferenciais = () => {

    return (
        <>
        <div className="texture h-5" style={{ backgroundImage: `url(${textureTop})` }}></div>
        <section className="diferenciais bg-[#005288] pb-14">
            <h1 className='text-4xl text-white text-center'>Diferenciais</h1>
            <div className="diferenciais container mx-auto max-w-6xl gap-5 flex">
                <div className="buttons w-[50%] text-center">
                    <button className='bg-white py-1 px-2 rounded-md mb-2 hover:bg-[#005288] hover:text-white'>Período Integral</button>
                    <button className='bg-white py-1 px-2 rounded-md mb-2 hover:bg-[#005288] hover:text-white'>Período Integral</button>
                    <button className='bg-white py-1 px-2 rounded-md mb-2 hover:bg-[#005288] hover:text-white'>Período Integral</button>
                    <button className='bg-white py-1 px-2 rounded-md hover:bg-[#005288] hover:text-white'>Período Integral</button>
                </div>
                <div className='bottom-texts'>
                    <h2 className='text-[#1a99d2] font-bold text-2xl '>Período Integral</h2>
                    <p className='text-white text-justify font-medium text-[18px]'>Descobrir, desenvolver habilidades, relacionar-se, expandir os conhecimentos e o entendimento sobre o mundo, ganhar autonomia, vivenciar experiências fora da sala de aula, comunicar-se em outra língua. Assim é o Período Integral do Marista. Um projeto pedagógico completo para uma formação completa.</p>
                    <button className='mt-4 border rounded-xl py-2 px-2 text-white hover:text-[#005288] hover:bg-white font-medium'>Saiba mais</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Diferenciais