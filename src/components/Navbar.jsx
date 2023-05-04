import logo from "../img/logo.png";

import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className='navbar w-full bg-white'>
      <div className="top-menu h-7 bg-orange-500 text-white font-bold flex items-center justify-center">
        <p>Matriculas Abertas!</p>
      </div>
      <div className="main-container flex h-[75px] justify-between items-center px-10 my-1">
        <div className="socials flex gap-5 w-[200px]">
          <div className="insta text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:from-10% hover:via-purple-500 hover:via-30% hover:to-pink-500 to-90% ... hover:rounded-lg px-1 py-1">
            <a href="https://www.instagram.com/colegio.fenixbraz/" target="_blank" rel="noreferrer"><BsInstagram className="w-auto" size={30}/></a>
          </div>
          <div className="face text-gray-500 hover:rounded-lg hover:bg-[#3b5998] hover:text-white px-1 py-1">
            <a href="#"><BsFacebook className="w-auto" size={30}/></a>
          </div>
          <div className="face text-gray-500 hover:rounded-lg hover:bg-[#25D366] hover:text-white px-1 py-1">
            <a href="https://wa.link/spwqqk" target="_blank" rel="noreferrer"><BsWhatsapp className="w-auto" size={30}/></a>
          </div>
        </div>
        <div className="logo w-[250px] mr-20">
          <a href="#"><img src={logo} alt="colégio fênix" /></a>
        </div>
        <div className="menu">
          <button className="px-4 py-3 text-[#003a63] hover:bg-[#3b5998] hover:text-white outline outline-offset-1 outline-1 rounded-[15px]">Matricule-se Já</button>
          {/* <ul>
            <li className="btn w-[200px]">
              <a href="#" className="px-4 py-3 text-[#003a63] hover:bg-[#3b5998] hover:text-white outline outline-offset-1 outline-1 rounded-[15px]">Fazer Matricula</a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="bottom-menu h-13 text-white bg-[#003a63] flex items-center justify-center">
        <a href="#cursos"><p className="uppercase text-[12px] px-[12px] py-4 hover:underline hover:bg-[#1a99d2]">Cursos</p></a>
        <a href="#nossos-planos"><p className="uppercase text-[12px] px-[12px] py-4 hover:underline hover:bg-[#1a99d2]">Nossos Planos</p></a>
        <a href="#diferenciais"><p className="uppercase text-[12px] px-[12px] py-4 hover:underline hover:bg-[#1a99d2]">Diferenciais</p></a>
        <a href="#galeria"><p className="uppercase text-[12px] px-[12px] py-4 hover:underline hover:bg-[#1a99d2]">Galeria</p></a>
        {/* <div className="dropdown relative z-9999">
          <button className="peer uppercase text-[12px] py-4 px-[12px] hover:underline hover:bg-[#1a99d2]">Diferenciais</button>
          <div className="dropdown-menu hidden peer-hover:flex hover:flex flex-col absolute bg-[#003a63] w-[200px]">
            <a href="" className=" px-[12px] py-[16px] hover:bg-[#1a99d2] hover:underline">Link1</a>
            <a href="" className=" px-[12px] py-[16px] hover:bg-[#1a99d2] hover:underline">Link1</a>
            <a href="" className=" px-[12px] py-[16px] hover:bg-[#1a99d2] hover:underline">Link1</a>
          </div>
        </div> */}
        <div className="dropdown relative">
          <button className="peer uppercase text-[12px] py-4 px-[12px] hover:underline hover:bg-[#1a99d2]">Diferenciais</button>
          <div className="dropdown-menu hidden peer-hover:flex hover:flex flex-col absolute bg-[#003a63] w-[200px]">
            <a href="" className=" px-[12px] py-[16px] hover:bg-[#1a99d2] hover:underline">Link1</a>
            <a href="" className=" px-[12px] py-[16px] hover:bg-[#1a99d2] hover:underline">Link1</a>
            <a href="" className=" px-[12px] py-[16px] hover:bg-[#1a99d2] hover:underline">Link1</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar