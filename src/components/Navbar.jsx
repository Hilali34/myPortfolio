import React, {useState} from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { BiNetworkChart } from 'react-icons/bi';
import { AiOutlineSolution } from 'react-icons/ai';
import { BiRocket } from 'react-icons/bi';



const NavBar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className=' w-full h-full  flex-col justify-between items-center px-4 bg-[#333333] text-gray-300'>
     
      {/* Menu */}
      
        <nav className='hidden :flex flex-col items-cent  md:flex items-center '>
          <li className='my-12'> <AiOutlineHome size={30}/></li>
          <li className='my-12'> <AiOutlineSolution size={30}/> </li>
          <li className='my-12'> < BiRocket size={30}/> </li>
          <li className='my-12'> <BiNetworkChart size={30}/> </li>
      
        </nav>

        {/* hamburger */}
        <button onClick={handleClick}  className=' fixed top-6 left-6 h-[50px] w-[50px]  cursor-pointer md:hidden z-10 ' type='button' aria-label="toggle navigation">
        <span className={nav? "absolute block w-full h-[2px] bg-[white]  ease-out duration-300  translate-y-0 rotate-[135deg]" :  "absolute block w-full h-[2px] bg-[white] ease-out duration-300 translate-y-[10px]" }></span>
        <span className={nav? "absolute block w-full h-[2px] bg-[white] transition-transform  ease-out duration-300 opacity-0" : "absolute block w-full h-[2px] bg-[white] ease-out duration-300 opacity-100 "}></span>
        <span className={nav? "absolute block w-full h-[2px] bg-[white] transition-transform  ease-out duration-300 translate-y-0 rotate-[-135deg] " : "absolute block w-full h-[2px] bg-[white] ease-out duration-300 translate-y-[-10px] "}></span>
        </button>
        
      
        {/* Navbar Mobile */}
        <nav onClick={handleClick} className={!nav ? 'translate-y-[-100%] traslate-transform duration-300 ease-[cubic-bezier(0.73,0.11,0.67,0.84)] absolute top-0 left-0 w-full h-screen bg-[#333333] flex flex-col justify-center items-center ' : 'traslate-transform duration-300 ease-[cubic-bezier(0.73,0.11,0.67,0.84)]  absolute top-0 left-0 w-full h-screen bg-[#333333] flex flex-col justify-center items-center md:hidden'}>
          <li onClick={handleClick} className='py-6 text-4xl'>Home</li>
          <li onClick={handleClick} className='py-6 text-4xl'>About</li>
          <li onClick={handleClick} className='py-6 text-4xl'>Skills</li>
          <li onClick={handleClick} className='py-6 text-4xl'>Work</li>
          <li onClick={handleClick} className='py-6 text-4xl'>Contact</li>
        </nav> 

      

      
    </div>


  )
}

export default NavBar