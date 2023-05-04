import { useState } from 'react';

function Cursos() {
    // Define o estado inicial dos cursos e matérias
    const [cursos] = useState([
        { id: 1, nome: 'Operador de Micro', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 2, nome: 'Secretáriado Executivo', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 3, nome: 'Axiliar Administrativo', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 4, nome: 'Auxiliar de Contabilidade', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 5, nome: 'Operador de Caixa', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 6, nome: 'Operador de Telemarketing', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 7, nome: 'Hotelaria e Turismo', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 8, nome: 'Auxiliar de Veterinário', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 9, nome: 'Montagem e Manutenção', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 10, nome: 'Web Designer', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 11, nome: 'Designer Gráfico', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 12, nome: 'Cuidador de Idosos', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 13, nome: 'Segurança do Trabalho', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 14, nome: 'Logistica', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 15, nome: 'Atendente de Farmácia', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 16, nome: 'Porteiro', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 17, nome: 'Vendas Online', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 18, nome: 'Edição e Criação de Videos', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 19, nome: 'Programação', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 20, nome: 'Panificação e Confeitaria', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 21, nome: 'Gastronomia', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 22, nome: 'Garçom', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] },
        { id: 23, nome: 'Kids', materias: ['Introdução a Informática', 'Windows 10', 'Internet 4.0', 'PowerPoint', 'Access', 'Word', 'Excel', 'Redes Sociais', 'Conquiste seu Emprego', 'Digitação'] }

    ]);
    const [popup, setPopup] = useState(null);
    const [show, setShow] = useState(true);

    // Função para mostrar a lista de matérias do curso quando o usuário passa o mouse sobre ele
    function handleCursoHover(curso) {
        setPopup(curso);
        setShow(false)
    }

    // Função para esconder a lista de matérias quando o usuário tira o mouse do curso
    function handleCursoLeave() {
        setPopup(null);
        setShow(true)
    }

    return (
        <div className="section cursos" id='cursos'>
            <div className='mx-auto max-w-6xl'>
                <h1 className='text-center text-2xl mb-4'>Nossos Cursos</h1>
                <div className="cursosMaterias flex justify-center">
                    <div className="cursos w-[50%] border-r-4">
                        <h1 className='text-center bg-cyan-700 text-white font-semibold'>Curso</h1>
                        <ul className='mt-4 flex flex-wrap justify-center gap-2 mb-4'>
                            {cursos.map(curso => (
                                <li key={curso.id} className='hover:bg-cyan-700 hover:text-white'>
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleCursoHover(curso)}
                                        onMouseLeave={handleCursoLeave}
                                    >
                                        | {curso.nome} |
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`materias w-[50%]`}>
                        <h1 className='text-center bg-cyan-700 text-white font-semibold'>Matéria</h1>       
                        {show &&
                          <div className="texts h-[240px] flex items-center justify-center">
                          <h1 className='text-2xl animate-pulse'>Selecione um Curso ao Lado</h1>
                        </div> }
                        {popup && (
                            <div className="mt-4 popup text-center transition duration-300">
                                {/* <h2>{popup.nome}</h2> */}
                                <ul>
                                    {popup.materias.map((materia, index) => (
                                        <li key={index}>{materia}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className='botton-informations text-center mt-10'>
                   <p className='text-sm'> <i>Você pode aproveitar as matérias cursadas em outros cursos, eliminando a necessidade de fazê-las novamente.</i> </p>
                </div>
            </div>
        </div>
    );
}

export default Cursos;