import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {FaCircle} from "react-icons/fa";
import NavBar from './Navbar';

const Home = () => {
  return (
    <>
      <div className='absolute top-0 h-6 w-full bg-[#606060] flex items-center pl-1 '> 
    
      <span ><FaCircle size={13} color={"#F24239"}/></span>
      <span className='m-3'><FaCircle size={13} color={"#FEBC2E"}/></span>
      <span><FaCircle size={13} color={"#28CB40"}/></span> 

      </div>

      <div className='grid grid-cols-[100px_1fr]'>
       <NavBar />
       <div name='home' className='w-full h-screen bg-[#303030]'>
        {/* Container */}
        <div className='max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full '>
          <p className='text-pink-600 mt-28 '>Salut je m'appel </p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Hilali Abdelali
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
           Je suis developpeur web :)
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I’m a full-stack developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused on
            building responsive full-stack web applications.
          </p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              Suivez moi !
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home