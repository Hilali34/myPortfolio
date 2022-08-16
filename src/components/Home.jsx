import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Typewriter from "typewriter-effect";
import image from '../assets/html-icon.svg'


const Home = () => {
  
  return (
    
       <div name='home' className='w-full bg-[#303030]'>
        {/* Container */}
        <div className='max-w-[900px] mx-auto  flex flex-col justify-center w-full h-screen'>
          <p className='first-letter:text-4xl text-[#ffc300] py-5 text-2xl '>Salut je m'appelle </p>
          <h1 className='text-4xl sm:text-7xl py-5 font-bold text-[#ccd6f6]'>
            Hilali Abdelali
          </h1>
          
          <h2 className="text-4xl  sm:text-5xl font-bold text-[#8892b0] "> 
          <Typewriter
            options={{
          
              loop: false,
            }}
            onInit={(typewriter)=> {
              
              console.log(typewriter)
            typewriter
            .changeDeleteSpeed(40)
            .changeDelay(80)
            .typeString("Je Suis developpeur web !")
            .pauseFor(1000)
            .deleteChars(5)
            .typeString("<span style='color: #FFC300'>Javascript !</span>")
            .pauseFor(1000)
            .deleteChars(12)
            .typeString("<span style='color: #1891CF'>React !</span>")
            .pauseFor(2000)
            .start()
            }}
            />
          </h2>
       

          <p className='text-[#8892b0] text-2xl py-10 max-w-[700px]'>
          Le développement est ma passion, je viens de finir le parcours Développeur Web chez 
          OpenClassRooms et je suis à l'ecoute pour toutes opprtunités pour un poste de développeur web junior sur Montpellier
          en alternace pour un bachelor 3. Je suis hyper motivé et impatient de commencer une nouvelle aventure !
          </p>
          <div>
            <button className='text-white  group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FFC300] hover:border-[#FFC300] hover:text-[black]'>
              En savoir plus
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Home